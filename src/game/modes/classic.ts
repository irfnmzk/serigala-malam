import { Mode } from "../structures/mode";

export const CLASSIC: Mode = {
  name: "Classic",
  minPlayer: 4,
  maxPlayer: 6,
  roleGuide: [
    { min: 4, guide: ["werewolf"] },
    { min: 6, guide: ["werewolf(2)"] },
  ],
  fill: ["villager"],
};
