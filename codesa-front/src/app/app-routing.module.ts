import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CrearUsuariosComponent } from "./components/crear-usuarios/crear-usuarios.component";
import { ListUsuariosComponent } from "./components/list-usuarios/list-usuarios.component";


const routes: Routes = [
    {path: '', component: ListUsuariosComponent},
    {path: 'crear-usuario', component: CrearUsuariosComponent},
    {path: 'editar-usaurio/:id', component: CrearUsuariosComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }