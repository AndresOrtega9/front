import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultadoActualComponent } from './components/resultado-actual/resultado-actual.component';
import { HistorialComponent } from './components/historial/historial.component';

const routes: Routes = [
  {path:'resultado', component: ResultadoActualComponent},
  {path: 'historial', component : HistorialComponent},
  {path: '', redirectTo: '/resultado', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
