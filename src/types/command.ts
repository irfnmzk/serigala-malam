import { Message } from "node-telegram-bot-api";
import { TelegramClient } from "../client";

export type CommandContext = {
  client: TelegramClient;
  message: Message;
  args: string[];
};

export type Command = {
  name: string;
  alias: string[];

  execute: (ctx: CommandContext) => void;
};
