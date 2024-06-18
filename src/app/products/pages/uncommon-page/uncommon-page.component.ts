import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {


  //i18n Select
  public name: string = 'Kevin';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  }
  changeClient(): void {
    console.log(this.gender);
    if (this.gender === 'male') {
      this.name = 'Melissa'
      this.gender = 'female'
    } else {
      this.name = 'Kevin'
      this.gender = 'male'
    }
  }


  //i18n Plural
  public clients: string[] = ['Kevin', 'Geovani', 'Carlos','Jose'];

  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    '=3': 'tenemos 3 clientes esperando la reserva.',
    'other': 'tenemos # clientes esperando.',
  }

  deleteClient(): void {
    console.log(this.clients.length);
    this.clients.shift();
  }


  // keyvalue pipe
  public person = {
    name: 'Kevin',
    age: 25,
    address: 'San Salvador, El Salvador'
  }

  // Async Pipe
  public myObservableTimer = interval(2000).pipe(
    tap(val => console.log('tap: ', val))
  );

public promiseValue: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(()=> {
    resolve('Tenemos data en la promesa');
    console.log('Tenemos data en la promesa');
    this.person.name = 'Kevin change'

  }, 3500);

})

}
