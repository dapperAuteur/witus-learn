"use client";

import { useState } from "react";
import { CommodityMap, type MapPin } from "./commodity-map";
import { GrowingBeltsMap, type MapBelt } from "./growing-belts-map";

// Switches the Commodity Map between Episode Origins (Natural Earth pins) and
// Growing Belts (Equal Earth bands + production regions).
export function MapTabs({ commodities, belts }: { commodities: MapPin[]; belts: MapBelt[] }) {
  const [mode, setMode] = useState<"origins" | "belts">("origins");
  const tabClass = (active: boolean) =>
    `px-4 py-2 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 ${
      active ? "text-white" : "text-neutral-600 dark:text-neutral-300"
    }`;

  return (
    <div>
      <div className="mb-4 inline-flex overflow-hidden rounded-lg border border-neutral-300 dark:border-neutral-700">
        <button
          type="button"
          onClick={() => setMode("origins")}
          aria-pressed={mode === "origins"}
          className={tabClass(mode === "origins")}
          style={mode === "origins" ? { backgroundColor: "var(--accent)" } : undefined}
        >
          Episode Origins
        </button>
        {belts.length > 0 ? (
          <button
            type="button"
            onClick={() => setMode("belts")}
            aria-pressed={mode === "belts"}
            className={tabClass(mode === "belts")}
            style={mode === "belts" ? { backgroundColor: "var(--accent)" } : undefined}
          >
            Growing Belts
          </button>
        ) : null}
      </div>

      {mode === "origins" ? (
        <CommodityMap commodities={commodities} />
      ) : (
        <GrowingBeltsMap belts={belts} />
      )}
    </div>
  );
}
