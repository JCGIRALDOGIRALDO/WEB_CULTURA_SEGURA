import {
  Component,
  ElementRef,
  ViewChild,
  Inject,
  PLATFORM_ID,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule],
})
export class HomeComponent implements OnInit, OnDestroy {
  displayHeader: string = 'Madurez';
  displayText: string =
    'Aspirar al máximo nivel de Cultura en SST (Vanguardista) caracterizado por la innovación, admisión del error como oportunidad de mejora, espíritu colaborativo, aporte a productividad, equipos seguros y saludables, BIG DATA SST, indicadores ejemplares en Seguridad y Salud en el Trabajo y altos resultados en Sostenibilidad.';
  // Agregar imagenes para el carrusel
  images = [
    'assets/images/gallery/Mesa-de-trabajo-1-copia-2-200x200.png',
    'assets/images/gallery/Mesa-de-trabajo-1-copia-3.png',
    'assets/images/gallery/Mesa-de-trabajo-1-copia-4-200x200.png',
    'assets/images/gallery/Mesa-de-trabajo-1-copia-5.png',
    'assets/images/gallery/Mesa-de-trabajo-1-copia-6-200x200.png',
    'assets/images/gallery/Mesa-de-trabajo-1-copia-7-200x200.png',
    'assets/images/gallery/Mesa-de-trabajo-1-copia-8.png',
    'assets/images/gallery/Mesa-de-trabajo-1-copia-9-200x200.png',
    'assets/images/gallery/Mesa-de-trabajo-1-copia-10.png',
    'assets/images/gallery/Mesa-de-trabajo-1-copia-11-200x200.png',
    'assets/images/gallery/Mesa-de-trabajo-1-copia-12-200x200.png',
    'assets/images/gallery/Mesa-de-trabajo-1-copia-13.png',
    'assets/images/gallery/Mesa-de-trabajo-1-copia-14-200x200.png',
    'assets/images/gallery/Mesa-de-trabajo-1-copia-15.png',
    'assets/images/gallery/Mesa-de-trabajo-1-copia-16-200x200.png',
    'assets/images/gallery/Mesa-de-trabajo-1-copia-17-200x200.png',
    'assets/images/gallery/Mesa-de-trabajo-1-copia-18.png',
    'assets/images/gallery/Mesa-de-trabajo-1-copia-19-200x200.png',
    'assets/images/gallery/Mesa-de-trabajo-1-copia-20.png',
    'assets/images/gallery/Mesa-de-trabajo-1-copia-200x200.png',
    'assets/images/gallery/Mesa-de-trabajo-1.png',
  ];

  @ViewChild('galleryWrapper') galleryWrapper: ElementRef | undefined;
  currentIndex = 0;
  imageWidth = 100;
  groupSize = 5;
  autoScrollInterval = 5000; // Intervalo de desplazamiento automático en ms
  private autoScrollSubscription: Subscription | undefined;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.startAutoScroll();
    }
  }

  ngOnDestroy() {
    if (this.autoScrollSubscription) {
      this.autoScrollSubscription.unsubscribe();
    }
  }

  updateText(header: string, text: string): void {
    this.displayHeader = header;
    this.displayText = text;
  }

  prevImage() {
    if (this.isBrowser) {
      this.currentIndex =
        (this.currentIndex - this.groupSize + this.images.length) %
        this.images.length;
      this.updateGallery();
    }
  }

  nextImage() {
    if (this.isBrowser) {
      this.currentIndex =
        (this.currentIndex + this.groupSize) % this.images.length;
      this.updateGallery();
    }
  }

  private updateGallery() {
    if (this.isBrowser) {
      const wrapper = this.galleryWrapper?.nativeElement as HTMLElement;
      if (wrapper) {
        const totalWidth = this.groupSize * this.imageWidth;
        const index = Math.floor(this.currentIndex / this.groupSize);
        const offset = -index * totalWidth;
        wrapper.style.transform = `translateX(${offset}px)`;
      }
    }
  }

  private startAutoScroll() {
    if (this.isBrowser) {
      this.autoScrollSubscription = interval(this.autoScrollInterval).subscribe(
        () => {
          this.nextImage();
        }
      );
    }
  }
}
