import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  displayHeader: string = 'Madurez';
  displayText: string =
    'Aspirar al máximo nivel de Cultura en SST (Vanguardista) caracterizado por la innovación, admisión del error como oportunidad de mejora, espíritu colaborativo, aporte a productividad, equipos seguros y saludables, BIG DATA SST, indicadores ejemplares en Seguridad y Salud en el Trabajo y altos resultados en Sostenibilidad.';

  updateText(header: string, text: string): void {
    this.displayHeader = header;
    this.displayText = text;
  }
}
