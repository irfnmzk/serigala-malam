import { Game } from "./game";
import { Player } from "./player";

export type RoleFaction = "town" | "werewolf" | "neutral";

export abstract class Role {
  public abstract name: string;
  public abstract faction: RoleFaction;

  public game: Game;

  constructor(readonly player: Player) {
    this.game = player.game;
  }

  public onAction() {}

  public onDay() {}

  public onNigth() {}

  public onDusk() {}

  public onDeath() {}
}
