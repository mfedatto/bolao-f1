import { TeamModel } from "../Models/TeamModel";
import { PowerUnities } from "./PowerUnities";
import { Countries } from "./Countries";

export class Teams implements Map<string, TeamModel> {
	private _map: Map<string, TeamModel>;
	
	constructor(
		private powerUnities = new PowerUnities(),
		private countries = new Countries()) {
		this[Symbol.toStringTag] = Object.prototype.toString();

		this.add({
			id: "alfa-romeo",
			name: "Alfa Romeo Racing Orlen",
			aka: "Alfa Romeo",
			constructorName: "Alfa Romeo Racing-Ferrari",
			powerUnity: powerUnities["ferrari"],
			chassis: "C39",
			country: countries["CH"]
		});
		this.add({
			id: "alphaTauri",
			name: "Scuderia AlphaTauri Honda",
			aka: "AlphaTauri",
			constructorName: "AlphaTauri-Honda",
			powerUnity: powerUnities["honda"],
			chassis: "*TBA*",
			country: countries["IT"]
		});
		this.add({
			id: "ferrari",
			name: "Scuderia Ferrari Mission Winnow",
			aka: "Ferrari",
			constructorName: "Ferrari",
			powerUnity: powerUnities["ferrari"],
			chassis: "*TBA*",
			country: countries["IT"]
		});
		this.add({
			id: "haas",
			name: "Haas F1 Team",
			aka: "Haas",
			constructorName: "Haas-Ferrari",
			powerUnity: powerUnities["ferrari"],
			chassis: "*TBA*",
			country: countries["US"]
		});
		this.add({
			id: "mcLaren",
			name: "McLaren F1 Team",
			aka: "McLaren",
			constructorName: "McLaren-Renault",
			powerUnity: powerUnities["renault"],
			chassis: "MCL35",
			country: countries["GB"]
		});
		this.add({
			id: "mercedes",
			name: "Mercedes-AMG Petronas Formula One Team",
			aka: "Mercedes",
			constructorName: "Mercedes",
			powerUnity: powerUnities["mercedes"],
			chassis: "F1 W11 EQ Power+",
			country: countries["DE"]
		});
		this.add({
			id: "racing-point",
			name: "SportPesa Racing Point F1 Team",
			aka: "Racing Point",
			constructorName: "Racing Point-BWT Mercedes",
			powerUnity: powerUnities["bwt-mercedes"],
			chassis: "*TBA*",
			country: countries["GB"]
		});
		this.add({
			id: "red-bull",
			name: "Aston Martin Red Bull Racing",
			aka: "Red Bull",
			constructorName: "Red Bull Racing-Honda",
			powerUnity: powerUnities["honda"],
			chassis: "RB16",
			country: countries["AT"]
		});
		this.add({
			id: "renault",
			name: "Renault F1 Team",
			aka: "Renault",
			constructorName: "Renault",
			powerUnity: powerUnities["renault"],
			chassis: "R.S.20",
			country: countries["FR"]
		});
		this.add({
			id: "williams",
			name: "ROKiT Williams Racing",
			aka: "Williams",
			constructorName: "Williams-Mercedes",
			powerUnity: powerUnities["mercedes"],
			chassis: "FW43",
			country: countries["GB"]
		});
	}

	clear(): void {
		this._map.clear();

		this.size = this._map.size;
	}
	
	delete(key: string): boolean {
		const result = this._map.delete(key);

		this.size = this._map.size;

		return result;
	}

	forEach(callbackfn: (value: TeamModel, key: string, map: Map<string, TeamModel>) => void, thisArg?: any): void {
		this._map.forEach(callbackfn, thisArg);
	}

	get(key: string): TeamModel {
		return this._map.get(key);
	}

	has(key: string): boolean {
		return this._map.has(key);
	}

	add(team: TeamModel): this {
		if (team.powerUnity.teams === null) {
			team.powerUnity.teams = [];
		}

		team.powerUnity.teams.push(team);

		this.set(team.id, team);

		return this;
	}

	set(key: string, value: TeamModel): this {
		this._map.set(key, value);

		this.size = this._map.size;

		return this;
	}

	size: number;
	
	*[Symbol.iterator](): IterableIterator<[string, TeamModel]> {
		for (let i of this._map) {
			yield i;
		}
	}

	entries(): IterableIterator<[string, TeamModel]> {
		return this._map.entries();
	}
	
	keys(): IterableIterator<string> {
		return this._map.keys();
	}
	
	values(): IterableIterator<TeamModel> {
		return this._map.values();
	}
	
	[Symbol.toStringTag]: string;
}
