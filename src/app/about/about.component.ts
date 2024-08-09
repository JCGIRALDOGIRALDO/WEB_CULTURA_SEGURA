import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  displayHeader: string = 'Lealtad';
  displayText: string =
    'Es la fidelidad y respeto hacia el cuidado del buen nombre de Cultura Segura y quienes la conforman, el respeto a los acuerdos, las decisiones, el buen uso de las instalaciones, los equipos tecnológicos, la propiedad intelectual y confidencialidad en información de nuestros clientes. HACE ALUSION A LA HONESTIDAD.';

  updateText(header: string, text: string): void {
    this.displayHeader = header;
    this.displayText = text;
  }
}
