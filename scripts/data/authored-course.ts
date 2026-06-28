// Shared shape for an authored course delivered as a committed data module.
// Any course (languages, FAA, cyber, Ed.L.D.) authored against the content/writing
// standard can be expressed this way and fed to the re-seedable seeder, which
// upserts lessons by (courseId, slug) so IDs — and thus embeddings/progress — survive.

export interface AuthoredLesson {
  slug: string;
  title: string;
  /** Markdown body (tables + examples + a production/conversation challenge). */
  body: string;
}

export interface AuthoredCourse {
  title: string;
  description: string;
  lessons: AuthoredLesson[];
}
