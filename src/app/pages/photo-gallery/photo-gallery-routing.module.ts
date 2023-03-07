import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoGalleryPage } from './photo-gallery.page';


const routes: Routes = [

  {
    path: 'gallery',
    component: PhotoGalleryPage,
    children: [
      {
        path: 'photos',
        loadChildren: () => import('../tabs/photos/photos.module').then(m => m.PhotosPageModule)
      },
      {
        path: 'favorites',
        loadChildren: () => import('../tabs/favorites/favorites.module').then(m => m.FavoritesPageModule)
      },
      {
        path: 'photo/:id',
        loadChildren: () => import('../tabs/single-photo/single-photo.module').then(m => m.SinglePhotoPageModule)
      },
      {
        path: '', 
        redirectTo: '/gallery/photos',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/gallery/photos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class PhotoGalleryPageRoutingModule {}
