import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)},
  {
    path: 'cadastro-page',
    loadChildren: () => import('./cadastro-page/cadastro-page.module').then( m => m.CadastroPagePageModule)
  },
  {
    path: 'update-delete-page',
    loadChildren: () => import('./update-delete-page/update-delete-page.module').then( m => m.UpdateDeletePagePageModule)
  }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
