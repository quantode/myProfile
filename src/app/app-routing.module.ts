import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ErrorComponent} from "./error/error.component";
import {AppComponent} from "./app.component";


const routes: Routes = [


  {
    path:'**', component:ErrorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
