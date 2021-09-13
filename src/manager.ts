import { TelegramClient } from "./client";
import { Game } from "./game/structures/game";
import { logger } from "./utils/logger";

export class GameManager {
  public games: Map<string, Game> = new Map();

  private eventLoop?: ReturnType<typeof setInterval>;

  constructor(public readonly client: TelegramClient) {}

  public start() {
    logger.info("starting game manager");

    this.eventLoop = setInterval(this._runEventLoop.bind(this), 1000);

    this.games.set("100", new Game("100"));
  }

  public stop() {
    clearInterval(this.eventLoop!);
  }

  private _runEventLoop() {
    this.games.forEach(async (game) => {
      try {
        await game.update();
      } catch (err) {
        console.error(err);
      }
    });
  }
}
