import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hidePassword'
})
export class HidePasswordPipe implements PipeTransform {

  transform(value: string): string {
    let size=value.length;let output="";
    for (let index = 0; index < size; index++) {
           output=output+"*";
    }
    return output;
  }

}
