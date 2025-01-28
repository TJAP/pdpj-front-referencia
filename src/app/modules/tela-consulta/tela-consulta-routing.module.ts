import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaConsultaComponent } from './tela-consulta.component';

const routes: Routes = [
  {
    path: '',
    component: TelaConsultaComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelaConsultaRoutingModule { }
