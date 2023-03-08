import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/photo-gallery/photo-gallery.module').then(m => m.PhotoGalleryPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules , useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
