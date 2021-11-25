import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Comentario } from 'src/app/models/comentario.model';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-add-comentario',
  templateUrl: './add-comentario.component.html',
  styleUrls: ['./add-comentario.component.css']
})
export class AddComentarioComponent{
  nomeCom = '';
  textoCom = '';
  
  addComentario(form: NgForm){
    if(form.invalid){
      return;
    }    
    this.comentarioService.addComentarios(form.value.nome, form.value.texto);
    form.resetForm();
  }


  constructor(public comentarioService:ComentarioService) { }

  ngOnInit(): void {
  }

}
