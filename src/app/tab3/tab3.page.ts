import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from '../models/configUrl';
import { imagem } from '../models/imagem';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  ImagensRequest: Observable<any>;
  listaImagens: Array<imagem> = new Array<imagem>();
  deleteRequest: Observable<any>;
  createRequest: Observable<any>;
  constructor(public navCtrl: NavController, public httpClient: HttpClient) {
    
    this.ImagensRequest = this.httpClient.get(API_ENDPOINT+'/images/json')
    this.ImagensRequest
    .subscribe(data => {
      this.listaImagens = data

    })

}
delete(imagem) {
  console.log(imagem)
  this.deleteRequest = this.httpClient.delete(API_ENDPOINT+'/images/' + imagem.imagem.Id)
  this.deleteRequest
      .subscribe(data => {
        this.ImagensRequest = this.httpClient.get(API_ENDPOINT+'/images/json')
        this.ImagensRequest
        .subscribe(data => {
          this.listaImagens = data
        })
    })
      }
criar(nome) {
  var input: any = document.getElementById('nome')
        this.createRequest = this.httpClient.post(API_ENDPOINT+'/images/create?fromImage=' + input.value,null)
        this.createRequest
            .subscribe(data => {
              this.ImagensRequest = this.httpClient.get(API_ENDPOINT+'/images/json')
              this.ImagensRequest
              .subscribe(data => {
                this.listaImagens = data
              })
          })
            }
      }
