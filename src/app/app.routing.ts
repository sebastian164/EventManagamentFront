import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './features/auth/auth.component';
import { UserComponent } from './features/users/user.component';
import { EventComponent } from './features/events/event.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'users', component: UserComponent },
  { path: 'events', component: EventComponent },
  { path: '', redirectTo: '/auth', pathMatch: 'full' }, // redirige a la ruta de autenticación por defecto
  { path: '**', redirectTo: '/auth' } // ruta no encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
