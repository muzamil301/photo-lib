import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GalleryService } from 'src/app/services/gallery/gallery.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastController } from '@ionic/angular';
import { PhotosPage } from './photos.page';

describe('PhotosPage', () => {
  let component: PhotosPage
  let fixture: ComponentFixture<PhotosPage>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        GalleryService,
        ToastController
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
