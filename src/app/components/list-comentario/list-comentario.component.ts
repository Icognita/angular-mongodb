import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';

import { Comentario } from 'src/app/models/comentario.model';
import { AuthService } from 'src/app/services/auth.service';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-list-comentario',
  templateUrl: './list-comentario.component.html',
  styleUrls: ['./list-comentario.component.css']
})
export class ListComentarioComponent implements OnInit, OnDestroy {

  comentarios: Comentario[] = []; 
  userIsAuthenticated=false;
  private comentariosSub: Subscription = new Subscription; 
  private authStatusSub: Subscription;


  constructor(public comentarioService:ComentarioService, private authService:AuthService) { }

  ngOnInit(): void {
    this.comentarioService.getComentarios();
    this.comentariosSub = this.comentarioService.getComentarioUpdateListener()
    .subscribe((comentarios: Comentario[]) => {
      this.comentarios = comentarios;
    });
    this.userIsAuthenticated= this.authService.getIsAuth();
   this.authStatusSub= this.authService.getauthStatusListener()
   .subscribe(isAuthenticated =>{
     this.userIsAuthenticated=isAuthenticated
   });
  }

  onDelete(comentarioId: string){
    this.comentarioService.deleteComentario(comentarioId);
  }

  ngOnDestroy(){
    this.comentariosSub.unsubscribe();
    this.authStatusSub.unsubscribe()
  }

}
