import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BASE_PATH } from 'src/app/config/constants';
import { GalleryImageModel } from "src/app/model/gallery.model";

@Component({
  selector: 'app-gallery-view',
  templateUrl: './gallery-view.component.html',
  styleUrls: ['./gallery-view.component.scss'],
})
export class GalleryViewComponent {

  @Input() data: any = [];
  @Input() showAddToFavt?: boolean = false;
  @Input() enableDetailView?: boolean = false;
  @Output("addToFavtEvent") addToFavtEvent: EventEmitter<any> = new EventEmitter();
  basepath = BASE_PATH;

  constructor(private router: Router){}
  
  addToFavtList(item:GalleryImageModel){
    this.addToFavtEvent.emit(item);       
  }

  goToDetailPage(itemId:number){
    this.router.navigate(['gallery/photo', itemId]);
  }

}
