import TelegramBot from "node-telegram-bot-api";
import { handleMessage } from "./events/message";
import { logger } from "./utils/logger";

export class TelegramClient {
  public telegram: TelegramBot;

  constructor() {
    this.telegram = new TelegramBot(process.env.TOKEN as string, {
      polling: true,
    });

    this._setup();
  }

  public start() {
    logger.info("starting Telegram client");
  }

  private _setup() {
    logger.info("setting up telegram client");
    this.telegram.on("message", (data) => handleMessage(this, data))
  }
}
