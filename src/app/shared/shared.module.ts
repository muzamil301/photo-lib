import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GalleryViewComponent } from './components/gallery-view/gallery-view.component';


@NgModule({
  declarations: [GalleryViewComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[GalleryViewComponent]
  
})
export class SharedModule { }
