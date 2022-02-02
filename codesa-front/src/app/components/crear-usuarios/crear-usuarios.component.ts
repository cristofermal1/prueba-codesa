import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuarios',
  templateUrl: './crear-usuarios.component.html',
  styleUrls: ['./crear-usuarios.component.css']
})
export class CrearUsuariosComponent implements OnInit {

  usuarioForm:FormGroup;
  id:any = '';
  titulo = 'Crear Usuario';
  editarUsuario:[]=[]

  constructor(private fb: FormBuilder,
              private router: Router,
              private _usuarioService: UsuarioService,
              private aRouter: ActivatedRoute,
              private toastr: ToastrService){

                this.usuarioForm =  this.fb.group({
                  nombre:['', Validators.required],
                  activo:['', Validators.required],
                  id_roles:['', Validators.required]
                })
                this.id=this.aRouter.snapshot.paramMap.get('id')
              }

  ngOnInit(): void {
    this.esEditar()
  }

  esEditar(){
    if(this.id !== null){
       
      this._usuarioService.obtenerUsaurio(this.id).subscribe(data => {
        this.titulo = "Usted se encuentra editando a: " +  data.nombre;
        this.usuarioForm.setValue({
          nombre:data.nombre,
          activo:data.activo,
          id_roles:data.id_roles
        })
       
      })
    }
  }

  agregarUsuario(){
      const USUARIO: Usuarios = {
        id_usuarios:this.id,
        nombre:this.usuarioForm.get('nombre')?.value,
        activo:this.usuarioForm.get('activo')?.value,
        id_roles:this.usuarioForm.get('id_roles')?.value
      }

      
      if(this.id){
        
        this._usuarioService.updateUsaurio(this.id,USUARIO).subscribe(data => {
          this.toastr.info('El usuario fue actualizado con exito', 'Usuario Actualizado');
          this.router.navigate(['/']);
        },error => {
          console.log(error)
          this.usuarioForm.reset();
        })
      }else{
        
        this._usuarioService.guardarUsuario(USUARIO).subscribe(data => {
          this.toastr.info('El usuario fue creado con exito', 'Usuario Creado');
          this.router.navigate(['/']);
        },error => {
          console.log(error)
          this.usuarioForm.reset();
        })
      }

      
      
  }

}
