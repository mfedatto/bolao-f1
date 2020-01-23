import { CountryModel } from "../Models/CountryModel";

export class Countries implements Map<string, CountryModel> {
	private _map: Map<string, CountryModel>;
	
	constructor() {
		this[Symbol.toStringTag] = Object.prototype.toString();

		this.add({
			id: "CH",
			name: {
				enUs: "Switzerland",
				ptBr: "Suíça"
			}
		});
		this.add({
			id: "IT",
			name: {
				enUs: "Italy",
				ptBr: "Itália"
			}
		});
		this.add({
			id: "US",
			name: {
				enUs: "United States",
				ptBr: "Estados Unidos"
			}
		});
		this.add({
			id: "GB",
			name: {
				enUs: "United Kingdom",
				ptBr: "Reino Unido"
			}
		});
		this.add({
			id: "DE",
			name: {
				enUs: "Germany",
				ptBr: "Alemanha"
			}
		});
		this.add({
			id: "FR",
			name: {
				enUs: "France",
				ptBr: "França"
			}
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

	forEach(callbackfn: (value: CountryModel, key: string, map: Map<string, CountryModel>) => void, thisArg?: any): void {
		this._map.forEach(callbackfn, thisArg);
	}

	get(key: string): CountryModel {
		return this._map.get(key);
	}

	has(key: string): boolean {
		return this._map.has(key);
	}

	add(country: CountryModel): this {
		this.set(country.id, country);

		return this;
	}

	set(key: string, value: CountryModel): this {
		this._map.set(key, value);

		this.size = this._map.size;

		return this;
	}

	size: number;
	
	*[Symbol.iterator](): IterableIterator<[string, CountryModel]> {
		for (let i of this._map) {
			yield i;
		}
	}

	entries(): IterableIterator<[string, CountryModel]> {
		return this._map.entries();
	}
	
	keys(): IterableIterator<string> {
		return this._map.keys();
	}
	
	values(): IterableIterator<CountryModel> {
		return this._map.values();
	}
	
	[Symbol.toStringTag]: string;
}
