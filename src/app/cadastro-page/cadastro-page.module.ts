import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroPagePageRoutingModule } from './cadastro-page-routing.module';

import { CadastroPagePage } from './cadastro-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CadastroPagePageRoutingModule
  ],
  declarations: [CadastroPagePage]
})
export class CadastroPagePageModule {}
