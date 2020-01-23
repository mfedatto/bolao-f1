import { TeamModel } from "./TeamModel";

export interface PowerUnityModel {
	id: string;
	name: string;
	teams?: TeamModel[];
}
