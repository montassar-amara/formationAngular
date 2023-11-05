import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duplicate'
})
export class DuplicatePipe implements PipeTransform {

  transform(value: string, c:number): string {
    return Array.from({length:c})
            .map((i)=>value)
            .join(' ')
  }

}
