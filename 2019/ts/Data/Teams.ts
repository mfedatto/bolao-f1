import { TeamModel } from "../Models/TeamModel";
import { PowerUnities } from "./PowerUnities";
import { Countries } from "./Countries";
import { PowerUnityModel } from "../Models/PowerUnityModel";
import { CountryModel } from "../Models/CountryModel";

export class Teams extends Map<string, TeamModel> {
	constructor(
		powerUnities = new PowerUnities(),
		countries = new Countries(),
		private map = new Map<string, TeamModel>()
		) {
		super();

		this.add({
			id: "alfa-romeo",
			name: "Alfa Romeo Racing Orlen",
			aka: "Alfa Romeo",
			constructorName: "Alfa Romeo Racing-Ferrari",
			powerUnity: powerUnities.get("ferrari"),
			chassis: "C39",
			country: countries.get("CH")
		});
		this.add({
			id: "alphaTauri",
			name: "Scuderia AlphaTauri Honda",
			aka: "AlphaTauri",
			constructorName: "AlphaTauri-Honda",
			powerUnity: powerUnities.get("honda"),
			chassis: "*TBA*",
			country: countries.get("IT")
		});
		this.add({
			id: "ferrari",
			name: "Scuderia Ferrari Mission Winnow",
			aka: "Ferrari",
			constructorName: "Ferrari",
			powerUnity: powerUnities.get("ferrari"),
			chassis: "*TBA*",
			country: countries.get("IT")
		});
		this.add({
			id: "haas",
			name: "Haas F1 Team",
			aka: "Haas",
			constructorName: "Haas-Ferrari",
			powerUnity: powerUnities.get("ferrari"),
			chassis: "*TBA*",
			country: countries.get("US")
		});
		this.add({
			id: "mcLaren",
			name: "McLaren F1 Team",
			aka: "McLaren",
			constructorName: "McLaren-Renault",
			powerUnity: powerUnities.get("renault"),
			chassis: "MCL35",
			country: countries.get("GB")
		});
		this.add({
			id: "mercedes",
			name: "Mercedes-AMG Petronas Formula One Team",
			aka: "Mercedes",
			constructorName: "Mercedes",
			powerUnity: powerUnities.get("mercedes"),
			chassis: "F1 W11 EQ Power+",
			country: countries.get("DE")
		});
		this.add({
			id: "racing-point",
			name: "SportPesa Racing Point F1 Team",
			aka: "Racing Point",
			constructorName: "Racing Point-BWT Mercedes",
			powerUnity: powerUnities.get("bwt-mercedes"),
			chassis: "*TBA*",
			country: countries.get("GB")
		});
		this.add({
			id: "red-bull",
			name: "Aston Martin Red Bull Racing",
			aka: "Red Bull",
			constructorName: "Red Bull Racing-Honda",
			powerUnity: powerUnities.get("honda"),
			chassis: "RB16",
			country: countries.get("AT")
		});
		this.add({
			id: "renault",
			name: "Renault F1 Team",
			aka: "Renault",
			constructorName: "Renault",
			powerUnity: powerUnities.get("renault"),
			chassis: "R.S.20",
			country: countries.get("FR")
		});
		this.add({
			id: "williams",
			name: "ROKiT Williams Racing",
			aka: "Williams",
			constructorName: "Williams-Mercedes",
			powerUnity: powerUnities.get("mercedes"),
			chassis: "FW43",
			country: countries.get("GB")
		});
	}

	add(team: TeamModel): this {
		if (team.powerUnity.teams === null) {
			team.powerUnity.teams = [];
		}

		team.powerUnity.teams.push(team);

		this.set(team.id, team);

		return this;
	}
}
