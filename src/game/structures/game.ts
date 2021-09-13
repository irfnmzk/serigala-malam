import { logger } from "../../utils/logger";

export type Phase = "lobby" | "night" | "day" | "dusk";

export class Game {
  public phase: Phase = "lobby";
  public started: Boolean = false;

  public gameCreated: number = Date.now();
  public gameStarted: number = Date.now();

  constructor(public readonly chatId: string) {
    logger.info("game crated on chatId :", chatId);
  }

  public update() {
    if (this.phase === "lobby") return this._updateLobby();
  }

  private _updateLobby() {
    if (!this.started) {
      const diff = Math.floor((Date.now() - this.gameCreated) / 1000);
      const secondsRemaining = 61 - diff;

      if ([60, 30, 10].includes(secondsRemaining)) {
        logger.info(`${secondsRemaining} seconds to start game`);
      }
    }
  }
}
