import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateDeletePagePage } from './update-delete-page.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateDeletePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateDeletePagePageRoutingModule {}
