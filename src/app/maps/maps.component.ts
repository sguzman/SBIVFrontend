import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MapsComponent implements OnInit {
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor() {
    this.loadMap();
  }

  loadMap() {
    const coords = {latitude: 34.4145788, longitude: -119.8617748};
    const latLng = new google.maps.LatLng(coords.latitude, coords.longitude);
    const mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

  ngOnInit() {
  }

}
