import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { FormsComponent } from './components/forms/forms.component';
import { PhonePipe } from './pipes/phone.pipe';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    PhonePipe,
    FormsComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    ErrorDialogComponent,
    PhonePipe,
    FormsComponent
  ]
})
export class SharedModule { }
