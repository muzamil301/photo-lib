import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery/gallery.service';
import { GalleryImageModel } from "src/app/model/gallery.model";
import { BASE_PATH } from 'src/app/config/constants';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-photos',
  templateUrl: 'single-photo.page.html',
  styleUrls: ['single-photo.page.scss']
})
export class SinglePhotoPage implements OnInit {

  favtImagesData: any = [];
  basepath = BASE_PATH;
  id: number = 0;

  constructor(private galleryService: GalleryService, private activatedRoute: ActivatedRoute,
    private route: Router, private toastController: ToastController) {
    this.activatedRoute.paramMap.subscribe((params) => {
      const itemId = params.get('id');
      this.id = Number(itemId);
    });
  }

  ngOnInit(): void {
    this.loadFavtImagesList();
  }

  removeFromFavtList(id: number) {

    if (id) {
      const filteredList = this.favtImagesData.filter((item: GalleryImageModel) => Number(item.id) !== id);
      this.galleryService.updateFavtList(filteredList);
      this.presentToast('Item removed from favorite');
      this.route.navigate(['gallery/favorites']);
    }

  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 800,
      position: 'bottom'
    });
    await toast.present();
  }

  loadFavtImagesList() {
    this.galleryService.getFavtImages().subscribe((data: any) => {
      this.favtImagesData = data;
    });
  }

}
