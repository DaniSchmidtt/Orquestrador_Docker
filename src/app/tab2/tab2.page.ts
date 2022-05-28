import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from '../models/configUrl';
import { container } from '../models/container';

@Component({
  selector: 'teste',
  templateUrl: 'tab2.page.html',
})
export class Tab2Page {
  containersRequest: Observable<any>;
  pauseRequest: Observable<any>;
  playRequest: Observable<any>;
  deleteRequest: Observable<any>;
  listaContainers: Array<container> = new Array<container>();


  constructor(public navCtrl: NavController, public httpClient: HttpClient) {
    
    this.containersRequest = this.httpClient.get(API_ENDPOINT+'/containers/json?all=true')
    this.containersRequest
    .subscribe(data => {
      this.listaContainers = data
      console.log(this.listaContainers)
    })
    
}
pausar(container) {
  this.playRequest = this.httpClient.post(API_ENDPOINT+'/containers/' + container.container.Id + "/stop" , null )
  this.playRequest
      .subscribe(data => {
        this.containersRequest = this.httpClient.get(API_ENDPOINT+'/containers/json?all=true')
    this.containersRequest
    .subscribe(data => {
      this.listaContainers = data
      console.log(this.listaContainers)
    })
      })
  
      }
play(container) {
        this.playRequest = this.httpClient.post(API_ENDPOINT+'/containers/' + container.container.Id + "/start" , null )
        this.playRequest
            .subscribe(data => {
              this.containersRequest = this.httpClient.get(API_ENDPOINT+'/containers/json?all=true')
          this.containersRequest
          .subscribe(data => {
            this.listaContainers = data
            console.log(this.listaContainers)
          })
            })
        
            }
delete(container) {
              this.deleteRequest = this.httpClient.delete(API_ENDPOINT+'/containers/' + container.container.Id)
              this.deleteRequest
                  .subscribe(data => {
                    this.containersRequest = this.httpClient.get(API_ENDPOINT+'/containers/json?all=true')
                this.containersRequest
                .subscribe(data => {
                  this.listaContainers = data
                  console.log(this.listaContainers)
                })
                  })
              
                  }
}

