import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class IndiaMapComponent extends Component {
  @action
  loadMap(element) {
    setTimeout(() => {
      const locations = [
        { name: 'Bangalore', lat: 12.9716, lng: 77.5946 },
        { name: 'Chennai', lat: 13.0827, lng: 80.2707 },
        { name: 'Mumbai', lat: 19.076, lng: 72.8777 },
        { name: 'Delhi', lat: 28.6139, lng: 77.209 },
        { name: 'Noida', lat: 28.5355, lng: 77.391 },
        { name: 'Hyderabad', lat: 17.385, lng: 78.4867 },
      ];

      const map = new google.maps.Map(element, {
        zoom: 5,
        center: { lat: 20.5937, lng: 78.9629 }, // Center of India
      });

      locations.forEach((loc) => {
        new google.maps.Marker({
          position: { lat: loc.lat, lng: loc.lng },
          map,
          title: loc.name,
        });
      });
    }, 500); // delay to ensure google.maps is ready
  }
}
