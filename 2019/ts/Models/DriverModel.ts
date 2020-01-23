import { TeamModel } from "./TeamModel";
import { CountryModel } from "./CountryModel";
import { DriverRaceResultModel } from "./DriverRaceResultModel";

export class DriverModel {
	id: string;
	name: string;
	country: CountryModel;
	number: number;
	team: TeamModel;
	raceResults: DriverRaceResultModel[];
}
