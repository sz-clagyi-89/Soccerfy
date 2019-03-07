import { Directive, Renderer2, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appButtonHover]'
})
export class ButtonHover {
    @HostBinding('class.active') isActive = false;

    @HostListener('mouseenter') mouseEnter() {
        this.isActive = true;
    }

    @HostListener('mouseleave') mouseLeave() {
        this.isActive = false;
    }
}
