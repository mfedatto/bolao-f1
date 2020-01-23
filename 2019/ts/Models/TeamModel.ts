import { DriverModel } from "./DriverModel";
import { PowerUnityModel } from "./PowerUnityModel";
import { CountryModel } from "./CountryModel";

export interface TeamModel {
	id: string;
	name: string;
	aka: string;
	constructorName: string;
	powerUnity: PowerUnityModel;
	chassis: string;
	country: CountryModel;
	drivers?: DriverModel[];
}
