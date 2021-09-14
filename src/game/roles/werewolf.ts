import { Role, RoleFaction } from "../structures/role";

export default class Werewolf extends Role {
  public name: string = "werewolf";
  public faction: RoleFaction = "werewolf";
}
