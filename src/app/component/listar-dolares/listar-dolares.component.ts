import { Component, OnInit } from '@angular/core';
import { DolaresService } from 'src/app/service/dolares.service';
import { Dolar } from 'src/app/models/dolar.model';
@Component({
  selector: 'app-listar-dolares',
  templateUrl: './listar-dolares.component.html',
  styleUrls: ['./listar-dolares.component.css']
})
export class ListarDolaresComponent implements OnInit {

  constructor(private dolaresService: DolaresService) { }

  ngOnInit(): void
  {
    this.getDolares();
  }
  getDolares(): void
  {
    console.log('JMA');
    this.dolaresService.obtenerDolar().subscribe(
      data =>
      {
        console.log(data);
      }
    );
  }
}
