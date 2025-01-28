import { NgModule } from '@angular/core';

import { TelaConsultaComponent } from './tela-consulta.component';
import { TelaConsultaRoutingModule } from './tela-consulta-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [TelaConsultaComponent],
  imports: [
    SharedModule,
    TelaConsultaRoutingModule,
  ],
  exports: [TelaConsultaComponent]
})
export class TelaConsultaModule { }
