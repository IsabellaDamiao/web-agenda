import { Contato } from './../model/contato';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  private readonly API = '/assets/contatos.json';

  constructor(private httpClient: HttpClient) {}

    lista(){
      return this.httpClient.get<Contato[]>(this.API).pipe(
        first(),
        delay(5000),
        tap(contatos => console.log(contatos))
      )
    };
}
