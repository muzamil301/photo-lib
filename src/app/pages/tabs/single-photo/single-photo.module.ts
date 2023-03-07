import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PhotosPageRoutingModule } from './single-photo-routing.module';

import { SinglePhotoPage } from './single-photo.page';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PhotosPageRoutingModule,
    SharedModule
  ],
  declarations: [SinglePhotoPage]
})
export class SinglePhotoPageModule {}
