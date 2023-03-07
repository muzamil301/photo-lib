import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglePhotoPage } from './single-photo.page';

const routes: Routes = [
  {
    path: '',
    component: SinglePhotoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosPageRoutingModule {}
