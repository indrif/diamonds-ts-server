import { IPosition } from "../common/interfaces/position.interface";

export interface IBoardBot {
  base?: IPosition;
  position?: IPosition;
  diamonds?: number;
  timeJoined?: Date;
  millisecondsLeft?: number;
  score?: number;
  botId: string;
  nextMoveAvailableAt?: Date;
}
