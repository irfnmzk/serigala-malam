import { Role, RoleFaction } from "../structures/role";

export default class Villager extends Role {
  public name: string = "villager";
  public faction: RoleFaction = "town";
}
