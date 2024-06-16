import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent {

  public nameLower: string = 'kevin'
  public nameUpper: string = 'KEVIN'
  public fullName : string = 'kEVin hErnANdeZ'

  public customDate: Date = new Date();
}
