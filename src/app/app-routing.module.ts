import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InstitucionalComponent } from './components/institucional/institucional.component';
import { JavascriptComponent } from './components/javascript/javascript.component';
import { ListComentarioComponent } from './components/list-comentario/list-comentario.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { AddComentarioComponent } from './components/add-comentario/add-comentario.component';
import { AuthGuard } from './services/auth.guard';

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
    component: JavascriptComponent,canActivate:[AuthGuard]
  },
  {
    path: 'feedback-alunos',
    component: ListComentarioComponent,canActivate:[AuthGuard]
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "signup", component: SignupComponent
  },

  {
    path: "Comentarios", component: AddComentarioComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }