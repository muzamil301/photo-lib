import { Component } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: 'photos.page.html',
  styleUrls: ['photos.page.scss']
})
export class PhotosPage {

  galleryData:any = [
    1,2,3,4,5,6,7,1,2,3,4,5,6,7
  ];

  constructor() {}

}
