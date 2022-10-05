import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-child',
  templateUrl: './product-child.component.html',
  styleUrls: ['./product-child.component.css']
})
export class ProductChildComponent implements OnInit {
  @Input() product;
  @Output() childOutput: EventEmitter<string> = new EventEmitter();
  outputMessage:string=" was added to your cart. (Message from child component)";
  cartMessage:string;
  constructor() { }

  ngOnInit(): void {
  }
  buyProduct() {
    this.cartMessage = this.product.name + this.outputMessage;
    this.childOutput.emit(this.cartMessage);
  }

}
