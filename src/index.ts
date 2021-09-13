import { TelegramClient } from "./client";
import { logger } from "./utils/logger";

require("dotenv").config();

async function init() {
  logger.info("Starting Serigala malam v0.1.0");

  const client = new TelegramClient();
  client.start();
}

init();
