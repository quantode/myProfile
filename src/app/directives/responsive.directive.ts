import {Directive, ElementRef} from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

@Directive({
  selector: '[appResponsive]'
})
export class ResponsiveDirective {

  constructor(private element: ElementRef,private breakpointObserver: BreakpointObserver) {
this.breakpointObserver.observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape]).subscribe({
  next:(result=>{
  if(result.matches){
    if(result.breakpoints[Breakpoints.HandsetPortrait ]){
      this.element.nativeElement.classList.add('pc');
    }
    if(result.breakpoints[Breakpoints.WebLandscape]){
      this.element.nativeElement.classList.remove('pc');
    }
  }
  })
})

  }



}
