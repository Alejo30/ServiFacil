import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./pages/login/login.component";
import { InicioComponent } from './pages/inicio/inicio.component';
import { RegistrarFormComponent } from './pages/registrar-form/registrar-form.component';
import { MiPerfilComponent } from './pages/mi-perfil/mi-perfil.component';



const routes: Routes = [
  { path: "", component: InicioComponent, pathMatch: "full" },
  { path: "inicio", component: InicioComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "registrar", component: RegistrarFormComponent, pathMatch: "full" },
  { path: "miPerfil", component: MiPerfilComponent, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
