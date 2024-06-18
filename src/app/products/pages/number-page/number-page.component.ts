import { Component } from '@angular/core';

@Component({
  selector: 'app-number-page',
  templateUrl: './number-page.component.html',
  styleUrl: './number-page.component.css'
})
export class NumberPageComponent {

  public totalSells: number = 2567789.5567;
  public percent: number = 0.4856;
}
