import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appDropdownDirective]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpened = false;

    @HostListener('click') mouseEnter(eventData: Event) {
        this.isOpened = !this.isOpened;
    }

    // @HostListener('click') mouseLeave(eventData: Event) {
    //     this.isOpened = !this.isOpened;
    // }
}