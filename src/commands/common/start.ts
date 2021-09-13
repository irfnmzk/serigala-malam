import { Command, CommandContext } from "../../types/command";

const startCommand: Command = {
  name: "start",
  alias: ["/start"],

  execute(ctx: CommandContext) {
    console.log(ctx);
  },
};

export default startCommand;
