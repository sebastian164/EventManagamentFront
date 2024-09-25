import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Asegúrate de mantener esto

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule] // Solo necesitas CommonModule si no usas otros módulos de Angular Material
})
export class HomeComponent {}
