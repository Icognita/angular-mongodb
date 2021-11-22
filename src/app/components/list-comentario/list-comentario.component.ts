import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';

import { Comentario } from 'src/app/models/comentario.model';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-list-comentario',
  templateUrl: './list-comentario.component.html',
  styleUrls: ['./list-comentario.component.css']
})
export class ListComentarioComponent implements OnInit, OnDestroy {

  comentarios: Comentario[] = []; 
  private comentariosSub: Subscription = new Subscription;  

  constructor(public comentarioService:ComentarioService) { }

  ngOnInit(): void {
    this.comentarioService.getComentarios();
    this.comentariosSub = this.comentarioService.getComentarioUpdateListener()
    .subscribe((comentarios: Comentario[]) => {
      this.comentarios = comentarios;
    });
  }

  onDelete(comentarioId: string){
    this.comentarioService.deleteComentario(comentarioId);
  }

  ngOnDestroy(){
    this.comentariosSub.unsubscribe();
  }

}
