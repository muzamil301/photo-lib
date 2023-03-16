import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GalleryViewComponent } from './components/gallery-view/gallery-view.component';
import { CustomLoaderComponent } from './components/custom-loader/custom-loader.component';

@NgModule({
  declarations: [GalleryViewComponent, CustomLoaderComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[GalleryViewComponent, CustomLoaderComponent]
  
})
export class SharedModule { }
