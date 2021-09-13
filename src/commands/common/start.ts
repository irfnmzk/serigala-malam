import { Command, CommandContext } from "../../types/command";

const startCommand: Command = {
  name: "start",
  alias: ["/start"],

  execute(ctx: CommandContext) {
    if (ctx.args.length === 0) {
      // send welcome message
      ctx.client.telegram.sendMessage(
        ctx.message.chat.id,
        "Selamat datang di indonesia"
      );
    }
  },
};

export default startCommand;
