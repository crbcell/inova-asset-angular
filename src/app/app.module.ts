import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule } from "@angular/material/table";
import { MatExpansionModule } from "@angular/material/expansion";
import { HttpClientModule } from '@angular/common/http';
import { FundosModule} from "./fundos/fundos.module";
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CotaListComponent } from './cotas/cota-list/cota-list.component';
import { CotaComponent } from './cotas/cota/cota.component';
import { PerfilComponent } from './perfis/perfil/perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    CotaListComponent,
    CotaComponent,
    PerfilComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      MatTableModule,
      MatExpansionModule,
      HttpClientModule,
      FundosModule,
      MatInputModule,
      MatFormFieldModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
