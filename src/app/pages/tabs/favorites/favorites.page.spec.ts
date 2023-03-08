import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FavoritesPage  } from './favorites.page';
import { GalleryService } from 'src/app/services/gallery/gallery.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('FavoritesPage', () => {
  let component: FavoritesPage
  let fixture: ComponentFixture<FavoritesPage>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        GalleryService
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
