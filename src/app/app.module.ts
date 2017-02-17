import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module'

import { HeaderComponent } from './components/header/header.component';
import { ProjectFormComponent } from './project/project-form/project-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
