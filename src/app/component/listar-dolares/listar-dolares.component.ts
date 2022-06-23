import { Component, OnInit } from '@angular/core';
import { DolaresService } from 'src/app/service/dolares.service';
import { Dolar } from 'src/app/models/dolar.model';
import { ChartDataSets, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-listar-dolares',
  templateUrl: './listar-dolares.component.html',
  styleUrls: ['./listar-dolares.component.css']
})
export class ListarDolaresComponent implements OnInit {

  dolar?: Dolar[];
  dolarFecha = new Array;
  dolarValor = new Array;
  loading = true;
  lineChartData: ChartDataSets[] = [{ data: this.dolarValor, label: 'Dolar' }];
  lineChartLabels: Label[] = this.dolarFecha;
  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];

  lineChartLegend = true;
  lineChartType: ChartType = 'line';
  lineChartPlugins = [];
  
  constructor(private dolaresService: DolaresService) { }

  ngOnInit(): void
  {
    this.getDolares();
  }
  getDolares(): void {
    this.loading = true;
    this.dolaresService.obtenerDolar().subscribe(
      data =>
      {
        var arregloDolar = this.transformaData(data.values);
        this.ordenarData(arregloDolar);
        this.lineChartData = [{ data: this.dolarValor, label: 'VARIACION DOLAR EN PESOS CHILENOS ENTRE ENERO 2019 y AGOSTO 2020' }];
        this.lineChartLabels = this.dolarFecha;
        this.loading = false;

      }
    );
  }

  transformaData(resp: any) {
    return Object.entries(resp);
  }

  ordenarData(datos: any) {
    var dolarFechas = new Array;
    var dolarValores = new Array;
    var i = 0;
    datos.forEach(
      function (elemento: any) {
        dolarFechas[i] = new Date(Number(elemento[0]) * 1000).toLocaleDateString('es-CL');
        dolarValores[i] = elemento[1];
        i++;
      }
    )
    this.dolarFecha = dolarFechas;
    this.dolarValor = dolarValores;
  }


}
