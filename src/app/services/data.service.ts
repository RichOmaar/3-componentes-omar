import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenuopts() {
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }

  getOpinion() {
    return this.http.get('https://cursodontic.com/app/controladores/opinionPonentes.app.php');
  }

  getAlbumes() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getHeroes() {
    return this.http.get<Componente[]>('/assets/data/superheroes.json')
    .pipe(
      delay(2000)
    );
  }

}