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
        var lista = data.values;
        var arregloDolar = Object.entries(lista);
        var arregloDolarObj = new Array;
        var dolarFechas = new Array;
        var dolarValores = new Array;
        var i = 0;
        arregloDolar.forEach(
          function (elemento) {
            dolarFechas[i] = new Date(Number(elemento[0]) * 1000).toLocaleDateString('es-CL');
            dolarValores[i] = elemento[1];

            i++;
          }
        )
          this.dolar = arregloDolarObj;
          this.dolarFecha = dolarFechas;
          this.dolarValor = dolarValores;

        this.lineChartData = [{ data: this.dolarValor, label: 'VARIACION DOLAR EN PESOS CHILENOS ENTRE ENERO 2019 y AGOSTO 2020' }];
        this.lineChartLabels = this.dolarFecha;
        this.loading = false;

        console.log(this.dolarValor);
      }
    );
  }

  public lineChartData: ChartDataSets[] = [{ data: this.dolarValor, label: 'Dolar' }];
  public lineChartLabels: Label[] = this.dolarFecha;
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];

  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];
}
