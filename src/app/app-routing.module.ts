import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Punto1FormComponent } from './components/punto1-form/punto1-form.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto2BComponent } from './components/punto2-b/punto2-b.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { Punto3FormComponent } from './components/punto3-form/punto3-form.component';
import { Punto3Component } from './components/punto3/punto3.component';

const routes: Routes = [
  {path:"punto1",component:Punto1Component},
  {path:"punto2",component:Punto2Component},
  {path:"punto3",component:Punto3Component},
  {path:"punto1-form",component:Punto1FormComponent},
  {path:"punto2-b",component:Punto2BComponent},
  {path:"punto3-form",component:Punto3FormComponent},
  {path:"**",component:Punto1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
