import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PhotoGalleryPageRoutingModule } from './photo-gallery-routing.module';

import { PhotoGalleryPage } from './photo-gallery.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PhotoGalleryPageRoutingModule
  ],
  declarations: [PhotoGalleryPage]
})
export class PhotoGalleryPageModule {}
