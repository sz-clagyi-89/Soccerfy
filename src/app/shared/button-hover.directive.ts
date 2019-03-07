import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appButtonHover]'
})
export class ButtonHoverDirective {
    @HostBinding('class.active') isActive = false;

    @HostListener('mouseenter') mouseEnter(eventData: Event) {
        this.isActive = true;
    }

    @HostListener('mouseleave') mouseLeave(eventData: Event) {
        this.isActive = false;
    }
}
