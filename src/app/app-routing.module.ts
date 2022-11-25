import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FundoListComponent } from './fundos/fundo-list/fundo-list.component';
import {CotaListComponent} from "./cotas/cota-list/cota-list.component";
import {PerfilComponent} from "./perfis/perfil/perfil.component";

const routes: Routes = [
  { path: 'fundos/ativo', component: FundoListComponent },
  { path: 'cotas', component: CotaListComponent },
  { path: '', component: PerfilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
