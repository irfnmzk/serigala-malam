import Collection from "@discordjs/collection";
import { logger } from "../../utils/logger";
import { timeDiff } from "../../utils/time";
import { generateSetup, Mode } from "./mode";
import { Player } from "./player";
import { CLASSIC } from "../modes/classic";
import { ROLES } from "../roles";

export type GameSettings = {
  mode: Mode;
};

export type Phase = "lobby" | "night" | "day" | "dusk";
export class Game {
  public phase: Phase = "lobby";
  public started: Boolean = false;

  public gameCreated: number = Date.now();
  public gameStarted: number = Date.now();

  public players: Collection<string, Player> = new Collection();

  constructor(public readonly chatId: string) {
    logger.info("game crated on chatId :", chatId);
  }

  get playerSize() {
    return this.players.size;
  }

  public update() {
    if (this.phase === "lobby") return this._updateLobby();
  }

  public start() {
    this.started = true;

    this._assignRoles();
  }

  private _updateLobby() {
    if (!this.started) {
      const diff = timeDiff(this.gameCreated);
      const secondsRemaining = 61 - diff;

      if ([60, 30, 10].includes(secondsRemaining)) {
        logger.info(`${secondsRemaining} seconds to start game`);
      }
    }
  }

  private _assignRoles() {
    const roles = generateSetup(CLASSIC, this.playerSize);

    let index = 0;
    this.players.each(async (player) => {
      const playerRole = roles[index];

      const PlayerRole = ROLES[playerRole];

      player.role = new PlayerRole(player);
      index++;
    });
  }
}
