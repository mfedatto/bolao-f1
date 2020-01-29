import { PowerUnityModel } from "../Models/PowerUnityModel";
import { TeamModel } from "../Models/TeamModel";

export class PowerUnities extends Map<string, PowerUnityModel> {
	constructor() {
		super();

		this.add({
			id: "ferrari",
			name: "Ferrari"
		});
		this.add({
			id: "honda",
			name: "Honda"
		});
		this.add({
			id: "renaul",
			name: "Renaul R.E.20"
		});
		this.add({
			id: "mercedes",
			name: "Mercedes"
		});
		this.add({
			id: "bwt-mercedes",
			name: "BWT Mercedes"
		});
	}

	add(powerUnity: PowerUnityModel): this {
		this.set(powerUnity.id, powerUnity);

		return this;
	}
}
