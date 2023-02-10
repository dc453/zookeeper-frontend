import { Pipe, PipeTransform } from '@angular/core';
import { Ratings } from './hunter';

@Pipe({
  name: 'ratingsOption'
})
export class RatingsOptionPipe implements PipeTransform {

  transform(value: Ratings): string {
    return Object.keys(value)
      .map(key => {
        const ratingKey = key.charAt(0).toUpperCase() + key.slice(1)
        const ratingValue = value[key as keyof Ratings];
        let ratingValueDisplay = "";
        
        if (ratingValue > 0) {
          ratingValueDisplay = `+${ratingValue}`;
        } else {
          ratingValueDisplay = `${ratingValue}`;
        }
        
        return `${ratingKey} ${ratingValueDisplay}`;
      })
      .join(', ');
  }

}
