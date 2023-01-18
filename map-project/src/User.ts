import { faker } from "@faker-js/faker";
import { ILocation } from './interfaces/ILocation';
import { IMappable } from './interfaces/IMappable';

export class User implements IMappable {
	name: string;
	location: ILocation

	constructor() {
		this.name = faker.name.firstName();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude())
		};
	}

	markerContent(): string {
		return `User Name: ${this.name}`;
	}
}
