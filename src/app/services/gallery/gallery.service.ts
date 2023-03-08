import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GALLERY_IMAGES_LIST_ENDPOINT, FAVT_IMAGES_ARRAY } from 'src/app/config/constants';
import { GalleryImageModel } from "src/app/model/gallery.model";
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { ToastController } from '@ionic/angular';


@Injectable({
    providedIn: 'root'
})

export class GalleryService {
    private favtImagesData: Array<GalleryImageModel> = [];

    constructor(private http: HttpClient, private localStorage: LocalStorageService, private toastController: ToastController) {
        const favtImagesArray = localStorage.getItem(FAVT_IMAGES_ARRAY) || [];
        if (favtImagesArray.length > 0) {
            this.favtImagesData = favtImagesArray;
        }
    }

    public getImages(pageNumber: number, pageLimit: number) {
        return this.http.get(`${GALLERY_IMAGES_LIST_ENDPOINT}/?page=${pageNumber}&limit=${pageLimit}`);
    }

    public getFavtImages() {
        return this.favtImagesData;
    }

    public addItemToFavtList(favtItem: GalleryImageModel) {
        const isExist = this.favtImagesData.filter((item: GalleryImageModel) => item.id == favtItem.id);
        
        if (this.favtImagesData.length < 1) {
            this.favtImagesData.push(favtItem);
            this.localStorage.setItem(FAVT_IMAGES_ARRAY, this.favtImagesData);
            this.presentToast('Item added to favorite');
            return;
        }
        if (isExist.length > 0) {
            this.presentToast('Item already exists!');
            return;
        }
        if (isExist.length < 1) {
            this.favtImagesData.push(favtItem);
            this.localStorage.setItem(FAVT_IMAGES_ARRAY, this.favtImagesData);
            this.presentToast('Item added to favorite');
        }
        

    }

    public removeItemFromFavtList(id: number) {
        const filteredList = this.favtImagesData.filter((item: GalleryImageModel) => Number(item.id) !== id);
        this.favtImagesData = filteredList;
        this.localStorage.setItem(FAVT_IMAGES_ARRAY, filteredList);
        this.presentToast('Item removed from favorite');
    }

    async presentToast(message:string) {
        const toast = await this.toastController.create({
            message: message,
            duration: 500,
            position: 'bottom'
        });
        await toast.present();
    }


}
