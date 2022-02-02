
package com.coo.crud.entidades;

import java.io.Serializable;
import java.util.List;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import lombok.Data;

@Entity
@Data
@Table(name="usuarios")
public class Usuarios implements Serializable{
    
    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_usuarios;
    
    @NotEmpty
    private String nombre;
    
    
    private Character activo;
    
   
    private int id_roles;
    
}
