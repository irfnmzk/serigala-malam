import { Role, RoleFaction } from "../structures/role";

export class Villager extends Role {
  public name: string = "werewolf";
  public faction: RoleFaction = "werewolf";
}
