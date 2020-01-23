import { PowerUnityModel } from "../Models/PowerUnityModel";
import { TeamModel } from "../Models/TeamModel";

export class PowerUnities implements Map<string, PowerUnityModel> {
	private _map: Map<string, PowerUnityModel>;
	
	constructor() {
		this[Symbol.toStringTag] = Object.prototype.toString();

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

	clear(): void {
		this._map.clear();

		this.size = this._map.size;
	}
	
	delete(key: string): boolean {
		const result = this._map.delete(key);

		this.size = this._map.size;

		return result;
	}

	forEach(callbackfn: (value: PowerUnityModel, key: string, map: Map<string, PowerUnityModel>) => void, thisArg?: any): void {
		this._map.forEach(callbackfn, thisArg);
	}

	get(key: string): PowerUnityModel {
		return this._map.get(key);
	}

	has(key: string): boolean {
		return this._map.has(key);
	}

	add(powerUnity: PowerUnityModel): this {
		this.set(powerUnity.id, powerUnity);

		return this;
	}

	set(key: string, value: PowerUnityModel): this {
		this._map.set(key, value);

		this.size = this._map.size;

		return this;
	}

	size: number;
	
	*[Symbol.iterator](): IterableIterator<[string, PowerUnityModel]> {
		for (let i of this._map) {
			yield i;
		}
	}

	entries(): IterableIterator<[string, PowerUnityModel]> {
		return this._map.entries();
	}
	
	keys(): IterableIterator<string> {
		return this._map.keys();
	}
	
	values(): IterableIterator<PowerUnityModel> {
		return this._map.values();
	}
	
	[Symbol.toStringTag]: string;
}
