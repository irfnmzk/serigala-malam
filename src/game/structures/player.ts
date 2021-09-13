import { User } from "node-telegram-bot-api";
import { Game } from "./game";
import { Role } from "./role";

export class Player {
  public role?: Role;

  public dead: boolean = false;
  public hasVote: boolean = false;

  constructor(readonly game: Game, readonly user: User) {}
}
