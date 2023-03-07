import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery/gallery.service';
import { GalleryImageModel } from "src/app/model/gallery.model";

@Component({
  selector: 'app-favorites',
  templateUrl: 'favorites.page.html',
  styleUrls: ['favorites.page.scss']
})
export class FavoritesPage implements OnInit {

  favtImages: GalleryImageModel[] = [];
  loading: boolean = true;

  constructor(private galleryService: GalleryService) {}

  ngOnInit(): void {
    this.loadFavtImagesList();
  }
  
  loadFavtImagesList() {
    this.favtImages = this.galleryService.getFavtImages();
  }

}
