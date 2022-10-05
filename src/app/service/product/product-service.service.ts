import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, NgIterable } from '@angular/core';
import { Product } from 'src/app/data/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products: { productID: string; name: string; price: string; brand: string; }[];

  constructor(private http: HttpClient) {
  }
  getProducts(): Product[] {

    this.products =[{
      productID:'1',
      name:'IPhone 13',
      price: '1000',
      brand: 'Apple'
    },
    {
      productID:'2',
      name:'IPhone 13 Pro Max',
      price: '2000',
      brand: 'Apple'
    },
    {
      productID:'3',
      name:'IPhone 14',
      price: '3000',
      brand: 'Apple'
    },
    {
      productID:'4',
      name:'IPhone 14 Pro Max',
      price: '4000',
      brand: 'Apple'
    },
  ];
  return this.products;
    //return this.http.get<Product[]>('https://putsreq.com/15B7WN0uiYhvfOg8AmIF');
  }
}
