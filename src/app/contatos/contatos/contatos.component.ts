import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { FormsComponent } from 'src/app/shared/components/forms/forms.component';

import { Contato } from './../model/contato';
import { ContatosService } from './../service/contatos.service';



@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent {

  contatos$: Observable<Contato[]>;
  displayedColumns = ['name', 'phone', 'acoes']; // definindo pela interface contatos.ts

  constructor(private contatoService: ContatosService,
    public dialog: MatDialog) {
    this.contatos$ = this.contatoService.lista().pipe(
      catchError( error => {
        this.onError('Erro ao carregar contatos!');
        return of([])
      })
    );
   }

   onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent,{
      data: errorMsg});
  }
  onUpdate(data: string) {
    this.dialog.open(FormsComponent,{
      data: data});
  }
  onAdd() {
    this.dialog.open(FormsComponent);
  }
}
