import { Component } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery/gallery.service';
import { GalleryImageModel } from "src/app/model/gallery.model";
import { BASE_PATH } from 'src/app/config/constants';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: 'single-photo.page.html',
  styleUrls: ['single-photo.page.scss']
})
export class SinglePhotoPage {

  basepath = BASE_PATH;
  id: number = 0;

  constructor(private galleryService: GalleryService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      const itemId = params.get('id');
      this.id = Number(itemId);
    });
  }

  removeFromFavtList(id: number) {
    if (id) {
      this.galleryService.removeItemFromFavtList(id);
    }
  }

}
