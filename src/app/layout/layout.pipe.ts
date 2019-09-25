import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'layout'
})
export class LayoutPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
