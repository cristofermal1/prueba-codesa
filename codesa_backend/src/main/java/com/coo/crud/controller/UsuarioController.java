
package com.coo.crud.controller;

import com.coo.crud.services.UsuarioService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

import com.coo.crud.entidades.Usuarios;
import java.util.ArrayList;
import java.util.Optional;
//import java.util.ArrayList;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:4200",maxAge = 3600)
@RestController
@RequestMapping("/usuarios")
public class UsuarioController {
    
    @Autowired
    UsuarioService usuarioService;
    
    @GetMapping()
    public List<Usuarios> obtenerUsuarios(){
        return usuarioService.obtenerUsuarios();
    }
    
    @PostMapping()
    public  void  guardarUsuarios(@RequestBody Usuarios usuarios){
        ArrayList<Usuarios> usuario = usuarioService.buscarNombre(usuarios.getNombre());
        
            if(usuario.isEmpty()){
                    usuarioService.guardar(usuarios);
                    System.out.println(usuarios);
                    System.out.println("Se Guardo Correctamente");
            
                }else{

                    System.out.println("No se pudo guardar ");
                }
    }
    
    @PutMapping(path = "/{id}")
    public void ActualizarUsuario(@RequestBody Usuarios usuarios){
        usuarioService.guardar(usuarios);
    }
    
    @GetMapping("/query")
    public ArrayList<Usuarios> obtenerUsuarios(@RequestParam("nombre")String nombre){
        return usuarioService.buscarNombre(nombre);
    }
    
    
    @GetMapping(path = "/{id}")
    public  Optional<Usuarios>editarUsuario(@PathVariable("id") Long id){
        return usuarioService.buscarID(id);
    }
    
    @DeleteMapping(path = "/{id}" )
    public void elimarUsuario(@PathVariable("id") Long id){
        boolean ok = usuarioService.eliminar(id);
        
        if(ok){
            System.out.println("Se elimino Correctamente");
        }else{
           System.out.println("no se pudo eliminar");
        }
    }
    
        

    
}
