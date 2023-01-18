import { IMappable } from './interfaces/IMappable';

export class Map {
	// @ts-ignore
	private googleMap: google.maps.Map;
	constructor(divId: string) {
		// @ts-ignore
		this.googleMap = new google.maps.Map(
			document.getElementById(divId) as HTMLElement,
			{
							zoom: 1,
							center: {
									lat: 0,
									lng: 0
							}
			});
	}

	addMarker(mappable: IMappable) {
		let marker = new google.maps.Marker({
		  map: this.googleMap,
			position: {
			lat: mappable.location.lat,
			lng: mappable.location.lng
			}
		})
		marker.addListener('click', () => {
			let infoWindow = new google.maps.InfoWindow({
				content: mappable.markerContent()
			});
			infoWindow.open(this.googleMap, marker);
		})
	}

}
