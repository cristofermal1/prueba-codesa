export class Usuarios{
    id_usuarios?:string;
    nombre:string;
    activo:string;
    id_roles:number;
    constructor(nombre:string,activo:string,idRol:number){
        this.nombre=nombre;
        this.activo=activo;
        this.id_roles=idRol;
    }
}