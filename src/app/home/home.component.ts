import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule],
})
export class HomeComponent {
  displayHeader: string = 'Madurez';
  displayText: string =
    'Aspirar al máximo nivel de Cultura en SST (Vanguardista) caracterizado por la innovación, admisión del error como oportunidad de mejora, espíritu colaborativo, aporte a productividad, equipos seguros y saludables, BIG DATA SST, indicadores ejemplares en Seguridad y Salud en el Trabajo y altos resultados en Sostenibilidad.';

  images = [
    'assets/images/gallery/Mesa-de-trabajo-1-copia-2-200x200.png',
    'assets/images/gallery/Mesa-de-trabajo-1-copia-3.png',
    'assets/images/gallery/Mesa-de-trabajo-1-copia-4-200x200.png',
    'assets/images/gallery/Mesa-de-trabajo-1-copia-5.png',
    'assets/images/gallery/Mesa-de-trabajo-1-copia-6-200x200 (1).png',
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
  currentIndex = 0;
  imageWidth = 100; // Ajusta según el ancho de tus imágenes

  updateText(header: string, text: string): void {
    this.displayHeader = header;
    this.displayText = text;
  }

  prevImage() {
    this.currentIndex =
      this.currentIndex > 0 ? this.currentIndex - 1 : this.images.length - 1;
    this.updateGallery();
  }

  nextImage() {
    this.currentIndex =
      this.currentIndex < this.images.length - 1 ? this.currentIndex + 1 : 0;
    this.updateGallery();
  }

  private updateGallery() {
    const wrapper = document.querySelector(
      '.home__section--contact__article2--gallery__images__wrapper'
    ) as HTMLElement;
    if (wrapper) {
      const offset = -this.currentIndex * this.imageWidth;
      wrapper.style.transform = `translateX(${offset}%)`;
    }
  }
}
