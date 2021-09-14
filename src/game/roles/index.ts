import { Role } from "../structures/role";
import Villager from "./villager";
import Werewolf from "./werewolf";

export type ROLES_TYPE = {
  [key: string]: typeof Role | any;
};

export const ROLES: ROLES_TYPE = {
  villager: Villager,
  werewolf: Werewolf,
};
