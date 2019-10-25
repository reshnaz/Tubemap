import { Component, AfterContentInit } from '@angular/core';
import {TubemapService} from './tubemap.service';
import {HelperService} from './helper.service';
import config from '../tubemapconfig.json';
import data from './data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  title = 'tubemap-dashboard';

  constructor(private tubeservice: TubemapService, private helper: HelperService) {}

  ngAfterContentInit() {

config.transit = data;
config.transit.labels = 1;
config.transit.legend = 1;
this.tubeservice.render(config);
  }

}
