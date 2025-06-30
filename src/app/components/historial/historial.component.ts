import { Component, OnInit } from '@angular/core';
import { ServicioPruebaTecnicaService } from 'src/app/services/servicio-prueba-tecnica.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  historial: any[] = [];
  
  constructor(private pruebaTecnicaService: ServicioPruebaTecnicaService) { }

  ngOnInit(): void {
    this.pruebaTecnicaService.getHistorial().subscribe(
      data => {
        this.historial = data;
      },
      error => {
        console.error('No se han encontrado datos', error);
      }
    );
  }
}