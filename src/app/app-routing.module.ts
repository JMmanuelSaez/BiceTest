import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarDolaresComponent } from './component/listar-dolares/listar-dolares.component';
const routes: Routes = [
  {
    path: '', component: ListarDolaresComponent, pathMatch: 'full'
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
