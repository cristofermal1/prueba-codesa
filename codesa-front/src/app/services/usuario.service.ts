import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
 url = 'http://localhost:8080/usuarios';
  constructor(private http:HttpClient) { 

  }

  getUsuarios():Observable<any>{
    return this.http.get(this.url);
  }

  guardarUsuario(usuarios: Usuarios):Observable<any>{
    return this.http.post(this.url,usuarios);
  }
  eliminarUsuario(id:string):Observable<any>{
    return this.http.delete(this.url +"/"+ id);
  }

  obtenerUsaurio(id:string):Observable<any>{
    return this.http.get(this.url+"/"+id);
  }
   updateUsaurio(id:string,usuarios: Usuarios):Observable<any>{
      return this.http.put(this.url+"/"+id,usuarios)
   }


}
