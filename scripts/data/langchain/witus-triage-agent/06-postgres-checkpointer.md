Goal: After this lesson you can swap `MemorySaver` for `PostgresSaver` in about ten lines and watch a brand-new process resume a thread that paused inside a process that no longer exists.

Follow along in the [durable-HITL quickstart notebook](https://github.com/dapperAuteur/witus-triage-agent/blob/main/docs/course/module-0-durable-hitl/durable-hitl-quickstart.ipynb) (Lesson 2 cells), plus [`docker-compose.yml`](https://github.com/dapperAuteur/witus-triage-agent/blob/main/docs/course/module-0-durable-hitl/docker-compose.yml).

## What changed since last lesson

Last lesson the crash test printed "STATE LOST" because `MemorySaver` kept the paused thread in the first process's heap, and exiting the process dropped it. Now we move the checkpoint out of the heap and into Postgres, where a crash can't reach it.

## Start a local Postgres

The notebook only cares about one thing: a `DB_URI` connection string that points at something serving Postgres. Anything at that URI works. The repo ships a [`docker-compose.yml`](https://github.com/dapperAuteur/witus-triage-agent/blob/main/docs/course/module-0-durable-hitl/docker-compose.yml), so the fast path is:

```bash
docker compose up -d --wait
```

If Docker Desktop isn't an option on your machine, two container-free paths work just as well: Postgres.app (native macOS, click Initialize) or Homebrew (`brew install postgresql@16 && brew services start postgresql@16`). In both cases set `DB_URI` in `.env` to your local database. The notebook creates the tables it needs; you don't create them by hand.

## The swap, in about ten lines

This is the entire fix. Build a connection pool, construct a `PostgresSaver`, call `setup()` once to create the checkpoint tables, and compile the same graph with it.

```python
from langgraph.checkpoint.postgres import PostgresSaver
from psycopg_pool import ConnectionPool

pool = ConnectionPool(conninfo=DB_URI, max_size=10, kwargs={"autocommit": True})
checkpointer = PostgresSaver(pool)
checkpointer.setup()  # creates the checkpoint tables, once

graph = builder.compile(checkpointer=checkpointer)
```

Nothing about the graph changed. Same nodes, same edges, same `interrupt()`. The only difference is where the checkpoints are written. That's the point worth slowing down on: durability is a swap at compile time, not a rewrite of your agent. `setup()` is idempotent, so running it again on an existing database is safe; it creates the tables only if they're missing (LangChain, n.d.).

## Rerun the exact same crash test

Same two processes as Lesson 1, same `interrupt()`, but with `postgres` this time and a fresh thread id.

```bash
python step1_interrupt.py postgres durable-demo-1
python step2_resume.py postgres durable-demo-1
```

Process one pauses and exits, as before. Process two, a brand-new process, prints:

```
OK  resumed across the crash → EXECUTED
```

A new process picked up a thread that paused inside a process that no longer exists. The reason is one line of proof away.

## See the proof in the database

```sql
SELECT thread_id, count(*) FROM checkpoints GROUP BY thread_id;
```

The `durable-demo-1` row is there, with its checkpoint count. The paused state isn't in anyone's heap anymore. It's sitting in a Postgres table, which is exactly why a second process can read it. When process one wrote a checkpoint at the pause, it wrote to Postgres. When process two resumed, it read from Postgres. The two processes never shared memory. They shared a database, and that's enough.

## In practice

The demo runs against local Postgres for a reason: durability is about where state lives, and localhost proves the mechanism without a cloud bill. For production you point the same `DB_URI` at a managed Postgres and add the usual hardening (pooling limits, TLS, backups). None of that changes the ten lines. The checkpointer swap you just did is the whole durability story; everything after it is ordinary database operations. Next lesson: two rules that decide whether your own interrupt survives, because the swap is necessary but not sufficient.

## Key Takeaways

- The notebook needs only a `DB_URI`; Docker, Postgres.app, or Homebrew all satisfy it.
- The fix is about ten lines: a connection pool, a `PostgresSaver`, one `setup()` call, and compiling the same graph with it.
- The graph doesn't change; durability is a compile-time swap of the checkpointer, not a rewrite.
- After the swap the identical crash test resumes, because a new process reads the paused state from Postgres instead of a dead process's heap.
- A `SELECT` on the `checkpoints` table shows the persisted thread, which is the literal proof of durability.

## References

LangChain. (n.d.). *PostgresSaver* [LangGraph checkpoint-postgres reference]. https://langchain-ai.github.io/langgraph/reference/checkpoints/

The PostgreSQL Global Development Group. (2024). *PostgreSQL 16 documentation: Chapter 13, Concurrency control*. https://www.postgresql.org/docs/16/mvcc.html
