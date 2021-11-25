import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InstitucionalComponent } from './components/institucional/institucional.component';
import { JavascriptComponent } from './components/javascript/javascript.component';
import { ListComentarioComponent } from './components/list-comentario/list-comentario.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'quem-somos',
    component: InstitucionalComponent
  },
  {
    path: 'curso-javascript',
    component: JavascriptComponent
  },
  {
    path: 'feedback-alunos',
    component: ListComentarioComponent
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "signup", component: SignupComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }