import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Comentario } from '../models/comentario.model';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  private comentarios: Comentario[] = [];
  private comentariosUpdated = new Subject<Comentario[]>();  

  constructor(private http: HttpClient) { }

  getComentarios() {
    //trazendo dados do servidor
    this.http.get<{ message: string, comentarios: any }>('http://localhost:3000/api/comentarios')
    .pipe(map((comentarioData) => {
      return comentarioData.comentarios.map((comentario: { nome: string; texto: string; _id: string; }) => {
        return{
          nome: comentario.nome,
          texto: comentario.texto,
          id: comentario._id          
        };
      });
    }))
    .subscribe(atualizandoComentarios => {
        this.comentarios = atualizandoComentarios;
        this.comentariosUpdated.next([...this.comentarios]);
      });
  }

  getComentarioUpdateListener() {
    return this.comentariosUpdated.asObservable();
  }

  addComentarios(nome: string, texto: string) {
    const comentario: Comentario = {
      id: '',
      nome: nome,
      texto: texto
    }
    //conexao com servidor
    this.http.post<{ message: string }>("http://localhost:3000/api/comentarios", comentario)
      .subscribe(() => {
        this.comentarios.push(comentario);
        this.comentariosUpdated.next([...this.comentarios]);
      });
    alert('Comentário enviado com sucesso!')
  }

  deleteComentario(comentarioId:string){
    this.http.delete("http://localhost:3000/api/comentarios/" + comentarioId)
    .subscribe(() => {
      //filtrar os comentarios após excluir para não precisar atualizar a página
      const updatedComentarios = this.comentarios.filter(comentario => comentario.id !== comentarioId);
      this.comentarios = updatedComentarios;
      this.comentariosUpdated.next([...this.comentarios]);
    })
  }
}
