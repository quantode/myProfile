import {Component, ElementRef, HostBinding} from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myPortfolio';
  @HostBinding('class.pc') pcMode = false;

  constructor(private element: ElementRef,private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape]).subscribe({
      next:(result=>{
        for (let breakpoint of Object.keys(result.breakpoints)){
          if(breakpoint === Breakpoints.HandsetPortrait ){
           this.pcMode=false;
          }
          if(breakpoint === Breakpoints.WebLandscape){
            this.pcMode=true;
          }
        }
      })
    })

  }
}
