import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString.length === 0) {
      return value;
    }
    const resultArray = [];
    console.log(value);
    for (const item of value) {
      const test = item[ propName ];
      if (test === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}

