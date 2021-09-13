import { Message } from "node-telegram-bot-api";
import { TelegramClient } from "../client";
import { logger } from "../utils/logger";

export function handleMessage(client: TelegramClient, message: Message) {
  const prefix = "/";
  const content = message.text?.toLowerCase();

  console.log(content);

  // handle command with prefix
  if (!content) return;
  if (!content.startsWith(prefix)) return;

  const [, commandName, ...args] = content.split(" ");

  if (!commandName) return;

  logger.info(commandName, args);
}
