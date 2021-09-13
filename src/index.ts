import { TelegramClient } from "./client";
import { GameManager } from "./manager";
import { logger } from "./utils/logger";

require("dotenv").config();

async function init() {
  logger.info("Starting Serigala malam v0.1.0");

  const client = new TelegramClient();
  const gameManager = new GameManager(client);

  client.start();
  gameManager.start();
}

init();
