import { Location } from './../../models/location';
import { AddressService } from './../../services/address.service';
import { Address } from './../../models/address';
import { GeocodeService } from './../../services/geocode.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Tool } from 'src/app/models/tool';
import { AgmMap, InfoWindowManager } from '@agm/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @Input() searchResults: Tool[];
  @ViewChild(AgmMap, { static: false }) public agmMap: AgmMap;
  lat: number = 39.7392;
  lng: number = -104.9903;
  location: Location = new Location();
  savedCoordinates: Location[] = [];
  coordinates: Location[] = []
  coordinateMap = new Map();
  openInfo: boolean = false;
  hoveredTool: Tool = new Tool();
  address: Address = new Address();
  owner: User = new User();
  constructor(
    private geoService: GeocodeService,
    private addrService: AddressService
    ) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.agmMap.triggerResize();
    this.redraw();
  }
  ngOnChanges() {
    var i = 0;
    for (let tool of this.searchResults) {
      this.coordinates = [];
      this.addrService.getAddressOfToolOwner(tool.id).subscribe(
        data => {
          this.geoService.geocodeAddress(this.generateApiAddressString(data)).subscribe(

            data => {
              this.parseForCoordinates(data, this.savedCoordinates);
              this.coordinateMap.set(tool.name, i);
              i++;
            },
            err => {
              console.error(err);
            }
          );
        },
        err => {
          console.error(err);
        }
      );
    }

  }

  mouseEnter(tool: Tool) {
    this.coordinates = [];
    var locationIndex = this.coordinateMap.get(tool.name);
    this.location = this.savedCoordinates[locationIndex];
    this.coordinates.push(this.location);
    this.hoveredTool = this.searchResults[locationIndex];
    for (let prop in this.hoveredTool) {
      if (prop === 'user') {
        this.owner = this.hoveredTool[prop];
        for (let property in this.owner) {
          if (property === 'address') {
            this.address = this.owner[property];
            break;
          }
        }
        break;
      }
    }
    this.openInfo = true;
  }

  parseForCoordinates(data, locationArray: Location[]) {
    for (let i = 0; i < data.results.length; i++) {
      this.location.lat = data.results[i].geometry.location.lat;
      this.location.lng = data.results[i].geometry.location.lng;
      locationArray.push(this.location);
      this.location = new Location();
    }
  }

  generateApiAddressString(addr: Address) {
    // 1600+Amphitheatre+Parkway,+Mountain+View,+CA
    var formattedString = '';
    formattedString += addr.street.split(' ').join('+');
    formattedString += ',';
    formattedString += '+' + addr.city.split(' ').join('+');
    formattedString += '+' + addr.state;
    return formattedString;
  }

  redraw(){
    this.openInfo = false;
    this.coordinates = this.savedCoordinates;
  }
}
