import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public getCatalogue(): Observable<Product[]> {
    return of([
      {
        id: 1,
        libelle: 'T-shirt',
      },
      {
        id: 2,
        libelle: 'Polo',
      },
      {
        id: 3,
        libelle: 'Chaussettes',
      },
      {
        id: 4,
        libelle: 'Pantalon',
      },

      {
        id: 5,
        libelle: 'Ballon',
      },
      {
        id: 6,
        libelle: 'Jogging',
      },
      {
        id: 7,
        libelle: 'Pull',
      },
    ]);
  }
}
