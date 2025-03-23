import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // 👈 ¡Esto es clave para que cuando el usuario vaya a /auth , lo redirija a 
  //auth/login y se muestre la vista correctamente
  { path: 'login', component:LoginComponent},
  { path: 'register', component:RegisterComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
