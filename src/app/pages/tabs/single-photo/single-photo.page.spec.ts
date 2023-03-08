import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GalleryService } from 'src/app/services/gallery/gallery.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastController } from '@ionic/angular';
import { SinglePhotoPage } from './single-photo.page';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Subscriber } from 'rxjs';




describe('SinglePhotoPage', () => {
  let component: SinglePhotoPage
  let fixture: ComponentFixture<SinglePhotoPage>
  const fakeActivatedRoute = {
    snapshot: { data: { } }
  } as ActivatedRoute;

  let mockSomeService = {
    loadFavtImagesList: () => {}
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        RouterTestingModule,
        ToastController,
        Router,
        { provide: GalleryService, useValue: mockSomeService },
        {provide: ActivatedRoute, useValue: fakeActivatedRoute} ,
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePhotoPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  
  it('should create', () => {
    spyOn(mockSomeService, 'loadFavtImagesList').and.returnValue()
    expect(component).toBeTruthy()
  })
})