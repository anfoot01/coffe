import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
coffeeBeansData: any;
  constructor(private location: Location) { }
  goBack(): void {
    this.location.back();
  }
  public coffeeData = [
    {
      title: 'Robusta Beans',
      id: 1,
      descShort: 'Medium Roasted',
      descLong: 'Medium Roasted',
      price: 10.50,
      rating: 4.5,
      voted: 6879,
      img:'',
    },
  ]
}
