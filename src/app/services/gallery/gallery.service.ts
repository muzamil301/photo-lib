import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GALLERY_IMAGES_LIST_ENDPOINT, FAVT_IMAGES_ARRAY } from 'src/app/config/constants';
import { GalleryImageModel } from "src/app/model/gallery.model";
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject, filter, take, switchMap } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class GalleryService {
    private favtImagesSource: BehaviorSubject<any[]> = new BehaviorSubject<any>([]);
    public favtImagesData = this.favtImagesSource.asObservable();

    constructor(private http: HttpClient, private localStorage: LocalStorageService, private toastController: ToastController) {
        this.favtImagesSource = new BehaviorSubject<any>(localStorage.getItem(FAVT_IMAGES_ARRAY) || []);
        this.favtImagesData = this.favtImagesSource.asObservable();
    }

    public getImages(pageNumber: number, pageLimit: number) {
        return this.http.get(`${GALLERY_IMAGES_LIST_ENDPOINT}/?page=${pageNumber}&limit=${pageLimit}`);
    }

    public getFavtImages() {
        return this.favtImagesData;
    }

    public updateFavtList(updatedData:any) {
        
        if(updatedData){
            this.localStorage.setItem(FAVT_IMAGES_ARRAY, updatedData);
            this.favtImagesSource.next(updatedData);
        }

    }

    async presentToast(message:string) {
        const toast = await this.toastController.create({
            message: message,
            duration: 800,
            position: 'bottom'
        });
        await toast.present();
    }
}
