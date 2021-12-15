import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ContatosRoutingModule } from './contatos-routing.module';
import { ContatosComponent } from './contatos/contatos.component';


@NgModule({
  declarations: [
    ContatosComponent
  ],
  imports: [
    CommonModule,
    ContatosRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class ContatosModule { }
