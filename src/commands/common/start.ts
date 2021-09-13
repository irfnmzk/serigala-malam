import { Command, CommandContext } from "../../types/command";

const startCommand: Command = {
  name: "start",
  alias: ["/start"],

  execute(ctx: CommandContext) {
    console.log(ctx.message);

    if (ctx.args.length === 0 && ctx.message.chat.type === 'private') {
      // send welcome message
      ctx.client.telegram.sendMessage(
        ctx.message.chat.id,
        "Selamat datang di indonesia"
      );
    }
  },
};

export default startCommand;
