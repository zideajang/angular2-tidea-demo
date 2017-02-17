import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProjectFormComponent } from '../project/project-form/project-form.component'
const appRoutes: Routes = [
   {
    path:'',
    component:ProjectFormComponent
  },
  {
    path:'project',
    component:ProjectFormComponent
  }
]
@NgModule({
  imports: [
     RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
