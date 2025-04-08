import { Routes } from '@angular/router';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardianService } from './login-guardian.service';

export const routes: Routes = [
    {path:'', component: ListadoProductosComponent,canActivate:[LoginGuardianService]}, //localhost:4200/
    {path:'listado', component: ListadoProductosComponent,canActivate:[LoginGuardianService]},
    {path:'agregar', component: FormularioComponent,canActivate:[LoginGuardianService]},
    {path:'editar/:llave', component: FormularioComponent,canActivate:[LoginGuardianService] },
    {path:'login',component: LoginComponent},//ruta par el login
    //ruta comodin para cualquier otra ruta no registrada
    {path:'**',component: ErrorComponent}
];
