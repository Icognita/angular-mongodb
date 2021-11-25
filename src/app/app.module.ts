import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppComponent } from './app.component';
import { AddComentarioComponent } from './components/add-comentario/add-comentario.component';
import { ListComentarioComponent } from './components/list-comentario/list-comentario.component';
import { HomeComponent } from './components/home/home.component';
import { InstitucionalComponent } from './components/institucional/institucional.component';
import { JavascriptComponent } from './components/javascript/javascript.component';
import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule, } from "@angular/material/toolbar"
import{  MatExpansionModule} from"@angular/material/expansion"
import{   MatInputModule } from"@angular/material/input"
import{ MatCardModule } from"@angular/material/card"
import{ MatButtonModule } from"@angular/material/button"
import{  } from"@angular/material"
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { AuthService } from './services/auth.service';
import { AuthInteceptor } from './services/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,   
    AddComentarioComponent,
    ListComentarioComponent,
    HomeComponent,
    InstitucionalComponent,
    JavascriptComponent,
    LoginComponent,
    SignupComponent
  
  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatInputModule,
    MatCardModule, 
    MatButtonModule

   
   
    
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInteceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
