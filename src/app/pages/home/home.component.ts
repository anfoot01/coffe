import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public mainTitle = [
    {
      title:'Find the best coffee for you',
    },
  ]
  public coffeeData = [
    {
      title: 'Cappucino',
      id: 1,
      desc: 'With Steamed Milk',
      price: 4.20,
      rating: 4.5,
      img:'./img/cappuccino1.png',
    },
    {
      title: 'Latte',
      id: 2,
      desc: 'With Foam',
      price: 4.20,
      rating: 4.2,
      img:'./img/cappuccino2.png',
    },
  ]
  public coffeeBeansData = [
    {
      title: 'Robusta Beans',
      id: 1,
      desc: 'Medium Roasted',
      price: 10.50 ,
      img:'',
    },
    {
      title: 'Mexico Beans',
      id: 2,
      desc: 'With Steamed Milk',
      price: 4.20,
      img:'',
    },
  ]

}
