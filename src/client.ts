import globby from "globby";
import TelegramBot from "node-telegram-bot-api";
import path from "path";
import { handleMessage } from "./events/message";
import { Command } from "./types/command";
import { logger } from "./utils/logger";

export class TelegramClient {
  public telegram: TelegramBot;

  public commands: Map<string, Command> = new Map();

  constructor() {
    this.telegram = new TelegramBot(process.env.TOKEN as string, {
      polling: true,
    });

    this._setup();
    this._loadCommands()
  }

  public start() {
    logger.info("starting Telegram client");
  }

  private _setup() {
    logger.info("setting up telegram client");
    this.telegram.on("message", (data) => handleMessage(this, data));
  }

  private async _loadCommands() {
    logger.info("loading all commands");
    const cmdFiles = await globby(
      path.join(__dirname, "commands") + "/**/*.ts"
    );

    for (const file of cmdFiles) {
      const commandFile = await import(file);
      const command = commandFile.default as Command;

      this.commands.set(command.name, command);
    }

    logger.info(`${this.commands.size} commands loaded`)
  }
}
