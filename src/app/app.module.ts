import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AddComentarioComponent } from './components/add-comentario/add-comentario.component';
import { ListComentarioComponent } from './components/list-comentario/list-comentario.component';
import { HomeComponent } from './components/home/home.component';
import { InstitucionalComponent } from './components/institucional/institucional.component';
import { JavascriptComponent } from './components/javascript/javascript.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,   
    AddComentarioComponent,
    ListComentarioComponent,
    HomeComponent,
    InstitucionalComponent,
    JavascriptComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
