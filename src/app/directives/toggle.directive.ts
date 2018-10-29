import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective {

  constructor(private el: ElementRef,
    private renderer: Renderer) { }

    @HostListener('click') onClick() { 

      //console.log()

      // let hideDivElement  = document.getElementById('showtableBar');
      // hideDivElement.style.display = 'block';
      //let part = this.el.nativeElement.querySelector('.card-text') 
      //this.renderer.setElementStyle(hideDivElement, 'display', 'block'); 
    }

}
