import { Component, OnDestroy, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery/gallery.service';
import { GalleryImageModel } from "src/app/model/gallery.model";
import { ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-photos',
  templateUrl: 'photos.page.html',
  styleUrls: ['photos.page.scss']
})
export class PhotosPage implements OnInit, OnDestroy {

  enableScroll: boolean = true;
  loading: boolean = true;
  pageNumber: number = 2;
  pageLimit: number = 10;
  favtImagesData: any = [];
  galleryData: GalleryImageModel[] = [];
  favtDataSubscription: Subscription = new Subscription;

  constructor(private galleryService: GalleryService, private toastController: ToastController) { }


  ngOnInit(): void {
    this.loadGalleryImagesList(this.pageNumber, this.pageLimit);
    this.loadFavtImagesList();
    
  }

  loadGalleryImagesList(pageNumber: number, pageLimit: number) {
    this.galleryService.getImages(pageNumber, pageLimit).subscribe(
      {
        next: (data: any) => {
          this.galleryData = [...this.galleryData, ...data];
          this.loading = false;
          this.enableScroll = true;
        },
        error: (err: any) => console.log(err),
      }
    )
  }

  addToFavtList(favtItem: GalleryImageModel) {
    // check if item already exist in favt list
    const isExist = this.favtImagesData.filter((item: GalleryImageModel) => item.id == favtItem.id);
    if (isExist.length > 0) {
      this.presentToast('Item already exists!');
      return;
    } else {
      this.favtImagesData.push(favtItem);
      this.galleryService.updateFavtList(this.favtImagesData);
      this.presentToast('Item added to favorite');
    }

  }

  async detectScroll($event: any) {
    const duration = this.generateRandomNumber(200, 300);

    const scrollElement = await $event.target.getScrollElement();
    const scrollHeight = scrollElement.scrollHeight - scrollElement.clientHeight;
    const currentScrollDepth = scrollElement.scrollTop;
    const targetPercent = 99;

    const triggerDepth = ((scrollHeight / 100) * targetPercent);

    if (currentScrollDepth > triggerDepth) {
      this.pageNumber++;
      this.loading = true;
      this.enableScroll = false;
      // can use duration variable for random number b/w 200 to 300 miliseconds but UX is not good
      setTimeout(() => {
        this.loadGalleryImagesList(this.pageNumber, this.pageLimit);
      }, 1500)
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

  generateRandomNumber(min: number, max: number) {
    return Math.floor(min + Math.random() * (max - min + 1));
  }

  loadFavtImagesList() {
    this.favtDataSubscription = this.galleryService.getFavtImages().subscribe((data: any) => {
      this.favtImagesData = data;
    });
  }

  ngOnDestroy() {
    this.favtDataSubscription.unsubscribe();
  }

}
