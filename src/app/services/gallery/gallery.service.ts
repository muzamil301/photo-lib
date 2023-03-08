import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { FAVT_IMAGES_ARRAY, GALLERY_IMAGES_LIST_ENDPOINT } from 'src/app/config/constants';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

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

    public updateFavtList(updatedData: any) {

        if (updatedData) {
            this.localStorage.setItem(FAVT_IMAGES_ARRAY, updatedData);
            this.favtImagesSource.next(updatedData);
        }

    }

    async presentToast(message: string) {
        const toast = await this.toastController.create({
            message: message,
            duration: 800,
            position: 'bottom'
        });
        await toast.present();
    }
}
