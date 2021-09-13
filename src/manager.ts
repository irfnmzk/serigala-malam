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
    console.log(this.games);
  }

  public stop() {
    clearInterval(this.eventLoop!);
  }

  private _runEventLoop() {
    this.games.forEach(async (game) => {
      console.log(game.chatId);
    });
  }
}
