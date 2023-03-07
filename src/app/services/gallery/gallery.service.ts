import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GALLERY_IMAGES_LIST_ENDPOINT } from 'src/app/config/constants';


@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  favoritesList = [];
  
  constructor (private http: HttpClient) {}

  public getImages(pageNumber:number, pageLimit:number){
    return this.http.get(`${GALLERY_IMAGES_LIST_ENDPOINT}/?page=${pageNumber}&limit=${pageLimit}`);
  }

}
