import { Component } from '@angular/core';
import { Color, Hero } from '../../interface/hero.interface';



@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {
  public isUpperCase: boolean = false;

  public keySortBy?: keyof Hero;

  public heroes: Hero[] = [
    {
      name: 'Super Man',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    }
    , {
      name: 'Daredevil',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.green,
    }
    ,
    {
      name: 'Linterna Verde',
      canFly: true,
      color: Color.green,
    }
  ]


  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrderbyKeyOfHero(keyOfHero: keyof Hero): void {
    this.keySortBy = keyOfHero;
  }

}
