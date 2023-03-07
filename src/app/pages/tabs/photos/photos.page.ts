import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery/gallery.service';
import { GalleryImageModel } from "src/app/model/gallery.model";


@Component({
  selector: 'app-photos',
  templateUrl: 'photos.page.html',
  styleUrls: ['photos.page.scss']
})
export class PhotosPage implements OnInit {

  enableScroll: boolean = true;
  loading: boolean = true;
  pageNumber: number = 2;
  pageLimit: number = 10;
  galleryData: GalleryImageModel[] = [];

  constructor(private galleryService: GalleryService) { }


  ngOnInit(): void {
    this.loadGalleryImagesList(this.pageNumber, this.pageLimit);
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

  addToFavtList(item: GalleryImageModel){
    if(item){
      this.galleryService.addItemToFavtList(item);
    }
  }

  ngOnDestroy(): void {
    // cleanup here
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

  generateRandomNumber(min: number, max: number) {
    return Math.floor(min + Math.random() * (max - min + 1));
  }

}
