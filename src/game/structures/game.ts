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
}
