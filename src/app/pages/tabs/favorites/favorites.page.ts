import { Component } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery/gallery.service';

@Component({
  selector: 'app-favorites',
  templateUrl: 'favorites.page.html',
  styleUrls: ['favorites.page.scss']
})
export class FavoritesPage {

  favoriteImages: any[] = [];
  loading: boolean = true;

  constructor(private galleryService: GalleryService) {

    this.favoriteImages = this.galleryService.favoriteImagesData;

   }

}
