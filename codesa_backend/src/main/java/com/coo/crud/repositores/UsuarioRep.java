
package com.coo.crud.repositores;

import com.coo.crud.entidades.Usuarios;
import java.util.ArrayList;
import org.springframework.data.repository.CrudRepository;


public interface UsuarioRep extends CrudRepository<Usuarios, Long>{
    
  
   
   
    
    public abstract  ArrayList<Usuarios> findByNombre(String nombre);
}
