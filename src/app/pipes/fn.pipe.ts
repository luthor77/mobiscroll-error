import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fn',
})
export class FnPipe implements PipeTransform {
  transform(fn: (...args: any[]) => any, ...args: any[]) {
    return fn?.(...args);
  }
}
