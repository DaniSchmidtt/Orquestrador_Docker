import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { version } from '../models/version';
import { status } from '../models/status';
import { API_ENDPOINT } from '../models/configUrl';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  versionRequest: Observable<any>;

  statusRequest: Observable<any>;

  version: version

  servidor

  status: status


  constructor(public navCtrl: NavController, public httpClient: HttpClient) {

    this.versionRequest = this.httpClient.get(API_ENDPOINT + '/version')
    this.versionRequest
      .subscribe(data => {
        this.servidor = API_ENDPOINT.split(":")[1].replace('//', '')
        this.version = data
      })

    this.statusRequest = this.httpClient.get(API_ENDPOINT + '/info')
    this.statusRequest
      .subscribe(data => {
        this.status = data
      })

  }
}
