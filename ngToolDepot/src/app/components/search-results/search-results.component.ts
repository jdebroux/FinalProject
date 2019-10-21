import { Location } from './../../models/location';
import { AddressService } from './../../services/address.service';
import { Address } from "./../../models/address";
import { GeocodeService } from "./../../services/geocode.service";
import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { Tool } from "src/app/models/tool";
import { AgmMap } from "@agm/core";

@Component({
  selector: "app-search-results",
  templateUrl: "./search-results.component.html",
  styleUrls: ["./search-results.component.scss"]
})
export class SearchResultsComponent implements OnInit {
  @Input() searchResults: Tool[];
  @ViewChild(AgmMap, { static: false }) public agmMap: AgmMap;
  lat: number = 39.7392;
  lng: number = -104.9903;
  location: Location = new Location();
  coordinates: Location[] = [];
  constructor(
    private geoService: GeocodeService,
    private addrService: AddressService
    ) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.agmMap.triggerResize();
  }
  ngOnChanges() {
    for (let tool of this.searchResults) {
      this.coordinates = [];
      this.addrService.getAddressOfToolOwner(tool.id).subscribe(
        data => {
          this.geoService.geocodeAddress(this.generateApiAddressString(data)).subscribe(
            data => {
              this.parseForCoordinates(data);
            },
            err => {
              console.error(err);
            }
          )
        },
        err => {
          console.error(err);
        }
      )
    }

  }

  parseForCoordinates(data) {
    for (let i = 0; i < data.results.length; i++) {
      this.location.lat = data.results[i].geometry.location.lat;
      this.location.lng = data.results[i].geometry.location.lng;
      this.coordinates.push(this.location);
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
}
