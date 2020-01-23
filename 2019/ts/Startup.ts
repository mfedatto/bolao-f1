import { PowerUnityModel } from "./Models/PowerUnityModel";
import { TeamModel } from "./Models/TeamModel";
import { CountryModel } from "./Models/CountryModel";
import { Countries } from "./Data/Countries";
import { PowerUnities } from "./Data/PowerUnities";
import { Teams } from "./Data/Teams";

export class Startup {
	constructor() {
		const countries = new Countries();
		const powerUnities = new PowerUnities();
		const teams = new Teams(powerUnities, countries);
	}
}
