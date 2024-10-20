import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprasTableComponent } from './compras-table/compras-table.component';
import { CompraFormComponent } from './compra-form/compra-form.component';

const routes: Routes = [
{ path:'', redirectTo: '/compras', pathMatch: 'full'},
{path: 'compras', component: ComprasTableComponent},
{path: 'compra/:id',component: CompraFormComponent},
{path: 'compra', component: CompraFormComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
