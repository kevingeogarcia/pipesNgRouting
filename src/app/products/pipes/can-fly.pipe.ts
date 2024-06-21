import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {

  transform(value: boolean): 'Yes' | 'No fly' {
    return value ? 'Yes' : 'No fly';
  }

}
