import { extractGuide, generateSetup, Mode } from "../src/game/structures/mode";

describe("Game Mode", () => {
  const TEST: Mode = {
    name: "Classic",
    minPlayer: 4,
    maxPlayer: 6,
    roleGuide: [
      { min: 4, guide: ["werewolf"] },
      { min: 6, guide: ["werewolf"] },
    ],
    fill: ["villager"],
  };

  test("should extract roleguide correctly", () => {
    const guide = ["werewolf", "villager(2)"];
    const result = extractGuide(guide);
    expect(result).toStrictEqual(["werewolf", "villager", "villager"]);
  });

  test("should extract roleguide with multi number", () => {
    const guide = ["werewolf(1)", "villager(3)"];
    expect(extractGuide(guide)).toStrictEqual([
      "werewolf",
      "villager",
      "villager",
      "villager",
    ]);
  });

  test("should generate roles based on setup", () => {
    const roles = generateSetup(TEST, 4);
    expect(roles).toStrictEqual([
      "werewolf",
      "villager",
      "villager",
      "villager",
    ]);

    const roles2 = generateSetup(TEST, 6);
    expect(roles2).toStrictEqual([
      "werewolf",
      "werewolf",
      "villager",
      "villager",
      "villager",
      "villager",
    ]);

    const roles3 = generateSetup(TEST, 5);
    expect(roles3).toStrictEqual([
      "werewolf",
      "villager",
      "villager",
      "villager",
      "villager",
    ]);
  });
});
