import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'splitLast' })
export class MresumePipe implements PipeTransform {
  transform(value:string, [separator]):string {
    console.log(value);
    return ""
  }
}