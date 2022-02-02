import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models/usuarios';
import {Subject} from 'rxjs'
import { UsuarioService } from 'src/app/services/usuario.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent implements OnInit {
  listUsuarios:any=[];
  filterpost = '';
  searchTerm$ = new Subject<string>();
  constructor(private _usuarioService:UsuarioService,private toastr:ToastrService ) { }

  ngOnInit(): void {
    this.obtenerUsuario();
  }

 
 

  obtenerUsuario(){
    this._usuarioService.getUsuarios().subscribe(data => {
      console.log(data)
      this.listUsuarios=data;
      
    }, error =>{
      console.log(error);
    })
  }

  eliminarUsauri(id:any){
    this._usuarioService.eliminarUsuario(id).subscribe(data => {
      this.toastr.info('El usuario fue eliminado con exito', 'Usuario eliminado');
      this.obtenerUsuario();
      console.log("se elimino")
    },error => {
      console.log(error);
    });


  }

}
