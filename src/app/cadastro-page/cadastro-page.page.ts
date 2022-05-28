import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from '../models/configUrl';
import { movie } from '../models/movie';

@Component({
  selector: 'app-cadastro-page',
  templateUrl: './cadastro-page.page.html',
  styleUrls: ['./cadastro-page.page.scss'],
  
})

export class CadastroPagePage implements OnInit {
  moviesRequest: Observable<any>;
  fileData:any;
  ionicForm: FormGroup;
  isSubmitted = false;
  constructor(public formBuilder: FormBuilder,public httpClient: HttpClient,public router: Router,public navCtrl: NavController) { }
  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      genre: ['', [Validators.required]],
      author: ['', [Validators.required]],
      note: ['', [Validators.required, Validators.pattern('^[0-9]+[.]*[0-9]*$')]]
    })
  }
  get errorControl() {
    return this.ionicForm.controls;
  }
  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log(this.ionicForm.valid)
      return false;
    } else {
      let postData = {
        "name": this.ionicForm.get("name").value,
        "description": this.ionicForm.get("description").value,
        "author": this.ionicForm.get("author").value,
        "genre": this.ionicForm.get("genre").value,
        "note": this.ionicForm.get("note").value,
        "base64Image": this.fileData
}
this.moviesRequest = this.httpClient.post(API_ENDPOINT+'/api/movies/CadastrarFilme', postData)
this.moviesRequest
    .subscribe(data => {
      this.navCtrl.pop();
    })

    }
  }
  onImageLoad(e){
    var reader = new FileReader();
    let self = this;
  
   
    let imageFileName = e.target.files[0].name;
    reader.onload = function(e) {
      self.fileData = reader.result; //base64 encoded
      let fileType = self.fileData.substring(self.fileData.indexOf(':')+1,self.fileData.indexOf('/'));;
    }
  
    reader.readAsDataURL(e.target.files[0]);
  
  }
}
