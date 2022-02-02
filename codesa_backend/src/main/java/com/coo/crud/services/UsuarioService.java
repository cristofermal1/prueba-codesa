
package com.coo.crud.services;

import com.coo.crud.repositores.UsuarioRep;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.coo.crud.entidades.Usuarios;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {
    
    @Autowired
    UsuarioRep usuarioRep;
    
    public List<Usuarios> obtenerUsuarios(){
       return (List<Usuarios>) usuarioRep.findAll();
    }

    
    
   
    public Usuarios guardar(Usuarios usuarios){
       return  this.usuarioRep.save(usuarios);
        
       
    }
    
//    public Usuarios actualizar(Usuarios usuarios){
//        return usuarioRep.save(usuarios);
//    }
    
    public Optional<Usuarios> buscarID(Long id){
        return usuarioRep.findById(id);
    }
    
  
    
   
   public ArrayList<Usuarios> buscarNombre(String nombre){
       return usuarioRep.findByNombre(nombre);
       
   }
   
  
   
   
   public boolean eliminar(Long id){
       System.out.println("iddd" + id);
       try {
           usuarioRep.deleteById(id);
           return true;
           
       } catch (Exception e) {
           return false;
       }
   }
           
           

    
}
