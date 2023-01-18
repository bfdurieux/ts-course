import { faker } from "@faker-js/faker";
import { ILocation } from './interfaces/ILocation';
import { IMappable } from './interfaces/IMappable';

export class Company implements IMappable {
	companyName: string;
	catchphrase: string;
	location: ILocation

	constructor() {
		this.companyName = faker.company.name();
		this.catchphrase = faker.company.catchPhrase();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude())
		};
	}

	markerContent(): string {
		return `<div> <h1>Company Name: ${this.companyName}</h1>
            <h3>CatchPhrase: ${this.catchphrase}</h3> </div>`;
	}
}
