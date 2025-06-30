import { Component, OnInit } from '@angular/core';
import { ServicioPruebaTecnicaService } from 'src/app/services/servicio-prueba-tecnica.service';

@Component({
  selector: 'app-resultado-actual',
  templateUrl: './resultado-actual.component.html',
  styleUrls: ['./resultado-actual.component.css']
})
export class ResultadoActualComponent implements OnInit {

  fact: string = '';
  cargando: boolean = true;
  cargandoGif: boolean = true;
  urlGif: string = '';

  constructor(private pruebaTecnicaService: ServicioPruebaTecnicaService) { }

  ngOnInit(): void {
    this.obtenerGif();
  }

  obtenerGif(): void {
    this.cargando = true;
    this.pruebaTecnicaService.getGif().subscribe(response => {
      this.fact = response.fact;
      this.urlGif = response.url;
      this.cargando = false;
    });
  }

  cambiarGif(): void {
    this.urlGif = '';
    this.cargandoGif = true;
    this.pruebaTecnicaService.getGifFactExistente(this.fact).subscribe(response => {
      this.urlGif = response.url;
      console.log(this.urlGif);
      this.cargandoGif = false;
    });
  }
}
