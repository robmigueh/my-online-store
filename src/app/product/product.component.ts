import { first, map, Observable, tap } from 'rxjs';
import { ProductServiceService } from './../service/product/product-service.service';
import { Component, NgIterable, OnInit } from '@angular/core';
import { Product } from '../data/product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  cartMessage:string;
  products: Product[] = [];
  constructor(private _productService: ProductServiceService) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(){

   this._productService.getProducts()
   .subscribe({
    next: results => {
      this.products = results;
      console.log('Data returned: ', results);
    }
   })
    // this._productService.getProducts().subscribe({
    //   next(data){
    //     this.products = data;
    //     console.log('Data returned: ', data);
    //   },
    //   error(msg){
    //     console.log('Error getting user info: ', msg);
    //   }
    // });
  }

  buyEventClicked($event: string) {
    //console.log($event);
    this.cartMessage = $event;
    alert(this.cartMessage);
  }
}
