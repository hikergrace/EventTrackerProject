import { Pipe, PipeTransform } from '@angular/core';
import { Tracker } from './models/tracker';
import { forEach } from '@angular/router/src/utils/collection';

@Pipe({
  name: 'incomplete'
})
export class IncompletePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
