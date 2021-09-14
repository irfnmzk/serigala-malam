import { Game } from "../src/game/structures/game";
import { Player } from "../src/game/structures/player";
import { createManyMockUser } from "./mocks/user";

describe("Game", () => {
  test("should in lobby phase", async () => {
    const game = new Game("100");
    expect(game.phase).toBe("lobby");
  });

  test("should add player correctly", () => {
    const game = new Game("100");
    const users = createManyMockUser(2);
    for (const user of users) {
      game.players.set(user.id.toString(), new Player(game, user));
    }
    expect(game.playerSize).toEqual(2)
  });
});
