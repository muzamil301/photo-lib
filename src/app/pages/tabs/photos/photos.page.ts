import { Component, HostListener, OnInit } from '@angular/core';
import { ScrollDetail } from '@ionic/angular';

import { LoadingController } from '@ionic/angular';
import { GalleryService } from 'src/app/services/gallery/gallery.service';


@Component({
  selector: 'app-photos',
  templateUrl: 'photos.page.html',
  styleUrls: ['photos.page.scss']
})
export class PhotosPage implements OnInit {

  enableScroll: boolean = true;
  pageNumber: number = 0;
  pageLimit: number = 100;
  galleryData:any[] = [];

  constructor(private galleryService: GalleryService, private loadingCtrl:LoadingController) { }


  ngOnInit(): void {
    this.loadGalleryImagesList(this.pageNumber, this.pageLimit);
  }

  @HostListener("ionScroll", ['$event'])
  onWindowScrollToEnd($event:any) {
    const duration = this.generateRandomNumber(200, 300);
    console.log(
      window.innerHeight,
      window.scrollY,
      document.body.scrollHeight
    )
    
    if (window.innerHeight + window.scrollY === document.body.scrollHeight) {
      this.pageNumber++;
      this.showLoading();
      setTimeout(()=>{
        this.loadGalleryImagesList(this.pageNumber, this.pageLimit);
      }, duration);
    }

  }

  async showLoading() {
    this.enableScroll = false;
    const loader = await this.loadingCtrl.create({
      message: 'Loading...',
    });
    await loader.present();
  }

  async dismissLoading() {
    await this.loadingCtrl.dismiss();
    this.enableScroll = true;
  }

  loadGalleryImagesList(pageNumber:number, pageLimit:number) {
      this.galleryService.getImages(pageNumber, pageLimit).subscribe(
        {
          next: (data: any) => {
            this.galleryData= [...this.galleryData, ...data];
            this.dismissLoading();
          },
          error: (err: any) => console.log(err),
        }
      )
  }


  ngOnDestroy(): void {
  }

  generateRandomNumber(min:number, max:number) {
    return Math.floor(min + Math.random()*(max - min + 1));
  }

}
