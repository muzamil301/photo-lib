import { Component, Input } from '@angular/core';
import { BASE_PATH } from 'src/app/config/constants';

@Component({
  selector: 'app-gallery-view',
  templateUrl: './gallery-view.component.html',
  styleUrls: ['./gallery-view.component.scss'],
})
export class GalleryViewComponent {

  @Input() data: any = [];
  toggleColor : boolean = false;
  basepath = BASE_PATH;


  addToFavoriteList(item:{}){
    console.log(item);
    this.toggleColor = !this.toggleColor;       
  }

}
