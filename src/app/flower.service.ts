import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fleur } from './entities';

@Injectable({
  providedIn: 'root',
})
export class FlowerService {
  constructor(private http: HttpClient) {}
  fetchAll() {
    return this.http.get<Fleur[]>('http://127.0.0.1:8000/api/fleur');
  }

  add(fleur: Fleur) {
    return this.http.post<Fleur>('http://127.0.0.1:8000/api/fleur', fleur);
  }
  delete(id: number) {
    return this.http.delete<void>('http://127.0.0.1:8000/api/fleur/' + id);
  }

  fetchOne(id: any) {
    return this.http.get<Fleur>('http://127.0.0.1:8000/api/fleur/' + id);
  }
  update(fleur: Fleur) {
    return this.http.patch<Fleur>(
      'http://127.0.0.1:8000/api/fleur/' + fleur.id,
      fleur
    );
  }
}
