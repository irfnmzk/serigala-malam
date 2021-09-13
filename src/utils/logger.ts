import { createLogger, format, transports } from "winston";

const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  silent: process.env.NODE_ENV === "test",
  defaultMeta: { service: "werewolf-arena" },
});

if (process.env.NODE_ENV !== "production") {
  logger.level = "debug";
  logger.add(
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.splat(),
        format.printf(
          (info) => `[${info.level}]: ${[info.timestamp]}: ${info.message}`
        )
      ),
    })
  );
}

export { logger };
