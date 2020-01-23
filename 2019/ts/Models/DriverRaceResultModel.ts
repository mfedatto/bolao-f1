import { DriverModel } from "./DriverModel";
import { GrandPrixModel } from "./GrandPrixModel";

export class DriverRaceResultModel {
	grandPrix: GrandPrixModel;
	driver: DriverModel;
	fastestLap: boolean;
	startingPosition: number;
	finalPosition: number;
}
