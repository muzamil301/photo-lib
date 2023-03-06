import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-view',
  templateUrl: './gallery-view.component.html',
  styleUrls: ['./gallery-view.component.scss'],
})
export class GalleryViewComponent {

  @Input() data: any = [];
  toggleColor : boolean = false;


  toggleLike(){
    this.toggleColor = !this.toggleColor;       
 }
}
