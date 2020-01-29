import { CountryModel } from "../Models/CountryModel";

export class Countries extends Map<string, CountryModel> {
	constructor() {
		super();
		
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

	add(country: CountryModel): this {
		this.set(country.id, country);

		return this;
	}
}
