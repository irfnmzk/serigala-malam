import { Game } from "../src/game/structures/game";

describe("Game", () => {
  test("should in lobby phase", async () => {
    const game = new Game("100");

    expect(game.phase).toBe("lobby");
  });
});
