import { Message } from "node-telegram-bot-api";
import { TelegramClient } from "../client";

export function handleMessage(client: TelegramClient, message: Message) {
  const prefix = "/";
  const content = message.text?.toLowerCase();

  // handle command with prefix
  if (!content) return;
  if (!content.startsWith(prefix)) return;

  const [commandName, ...args] = content.split(" ");

  if (!commandName) return;

  const command = client.commands.get(commandName.substring(1));

  if (!command) return;

  try {
    command.execute({ client, args, message });
  } catch (err) {
    console.error(err);
  }
}
