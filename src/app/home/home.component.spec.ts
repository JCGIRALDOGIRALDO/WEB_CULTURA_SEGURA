import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have images array defined', () => {
    expect(component.images).toBeDefined();
    expect(component.images.length).toBeGreaterThan(0);
  });

  it('should update currentIndex on prevImage', () => {
    component.currentIndex = 1;
    component.prevImage();
    expect(component.currentIndex).toBe(0);
  });

  it('should update currentIndex on nextImage', () => {
    component.currentIndex = 0;
    component.nextImage();
    expect(component.currentIndex).toBe(1);
  });
});
