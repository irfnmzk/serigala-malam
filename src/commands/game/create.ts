import { Command, CommandContext } from "../../types/command";

const createCommand: Command = {
  name: "create",
  alias: ["create", "buat"],

  execute(ctx: CommandContext) {
    console.log("create command fired");
  },
};

export default createCommand;
