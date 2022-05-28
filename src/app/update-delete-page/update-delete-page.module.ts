import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateDeletePagePageRoutingModule } from './update-delete-page-routing.module';

import { UpdateDeletePagePage } from './update-delete-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateDeletePagePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [UpdateDeletePagePage]
})
export class UpdateDeletePagePageModule {}
