import { CountryModel } from "./CountryModel";
import { GrandPrixScheduleModel } from "./GrandPrixScheduleModel";

export class  GrandPrixModel {
	id: string;
	name: string;
	circuit: string;
	country: CountryModel;
	city: string;
	round: number;
	schedule: GrandPrixScheduleModel;
}
