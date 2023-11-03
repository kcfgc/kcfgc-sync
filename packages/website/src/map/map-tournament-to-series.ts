import { GGTournamentSchema } from "@emily-curry/fgc-sync-common";
import * as z from "zod";

export const mapTournamentToSeries = (
  tournament: z.TypeOf<typeof GGTournamentSchema>
): string[] => {
  const result = new Set<string>();
  if (tournament.name.toLocaleLowerCase().includes("magic pixel weekly"))
    result.add("Magic Pixel Weekly");

  if (tournament.name.toLocaleLowerCase().includes("magic pixel runback"))
    result.add("Magic Pixel Runback");

  return [...result];
};
