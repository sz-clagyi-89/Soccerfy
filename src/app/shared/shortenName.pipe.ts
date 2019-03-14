import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'shortenName'
})
export class ShortenNamePipe implements PipeTransform {
    transform(value: any, limit: number ): any {
        if (value.length > limit) {
            return value.substr(0, limit) + ' ...';
        }
        return value;
    }
}