import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { CotaComponent } from './cota/cota.component';
import { RouterModule } from '@angular/router';
import {CotaListComponent} from "./cota-list/cota-list.component";
import {MatSelectModule} from "@angular/material/select";
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    CotaComponent,
    CotaListComponent

  ],

  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ]
})

export class CotasModule{}
