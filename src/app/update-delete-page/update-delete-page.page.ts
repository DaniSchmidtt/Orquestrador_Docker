import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from '../models/configUrl';

@Component({
  selector: 'app-update-delete-page',
  templateUrl: './update-delete-page.page.html',
  styleUrls: ['./update-delete-page.page.scss'],
})
export class UpdateDeletePagePage implements OnInit {
  data:any;
  moviesRequest: Observable<any>;
  fileData:any;
  ionicForm: FormGroup;
  isSubmitted = false;
  constructor(private route: ActivatedRoute, public formBuilder: FormBuilder,public httpClient: HttpClient,public router: Router,public navCtrl: NavController) {
 
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        console.log("aa")
        this.data = this.router.getCurrentNavigation().extras.state
        console.log(this.data)
        console.log(this.data.name)
      }
    });
    this.ionicForm = this.formBuilder.group({
      name: [this.data.name, [Validators.required]],
      description: [this.data.description, [Validators.required]],
      genre: [this.data.genre, [Validators.required]],
      author: [this.data.author, [Validators.required]],
      note: [this.data.note, [Validators.required, Validators.pattern('^[0-9]+[.]*[0-9]*$')]]
    })
    this.fileData = this.data.base64Image
    console.log(this.fileData)
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
        "id": this.data.id,
        "name": this.ionicForm.get("name").value,
        "description": this.ionicForm.get("description").value,
        "author": this.ionicForm.get("author").value,
        "genre": this.ionicForm.get("genre").value,
        "note": this.ionicForm.get("note").value,
        "base64Image": this.fileData
}
this.moviesRequest = this.httpClient.put(API_ENDPOINT+'/api/movies/AlterarFilme', postData)
this.moviesRequest
    .subscribe(data => {
      this.navCtrl.pop();
    })

    }
  }
  deletar() {
    
this.moviesRequest = this.httpClient.delete(API_ENDPOINT+'/api/movies/ExcluirFilme/'+ this.data.id)
this.moviesRequest
    .subscribe(data => {
      this.navCtrl.pop();
    })

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
