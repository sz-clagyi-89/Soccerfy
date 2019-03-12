import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'shortenName'
})
export class ShortenNamePipe implements PipeTransform {
    transform(value: any ): any {
        if (value.length > 10) {
            return value.substr(0, 10) + ' ...';
        }
        return value;
    }
}