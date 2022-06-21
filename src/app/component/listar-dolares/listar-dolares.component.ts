import { Component, OnInit } from '@angular/core';
import { DolaresService } from 'src/app/service/dolares.service';
import { Dolar } from 'src/app/models/dolar.model';
@Component({
  selector: 'app-listar-dolares',
  templateUrl: './listar-dolares.component.html',
  styleUrls: ['./listar-dolares.component.css']
})
export class ListarDolaresComponent implements OnInit {

  dolar?: Dolar[];
  
  constructor(private dolaresService: DolaresService) { }

  ngOnInit(): void
  {
    this.getDolares();
  }
  getDolares(): void
  {
    this.dolaresService.obtenerDolar().subscribe(
      data =>
      {
        var lista = data.values;
        var arregloDolar = Object.entries(lista);
        var arregloDolarObj = new Array;
        var i = 0;
        arregloDolar.forEach(
          function (elemento) {
            arregloDolarObj[i] = { fecha: elemento[0], valor: elemento[1] };
            i++;
          }
        )
        this.dolar = arregloDolarObj;
      }
    );
  }
}
