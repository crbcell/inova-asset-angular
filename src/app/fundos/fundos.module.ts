import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { FundoComponent } from './fundo/fundo.component';
import { RouterModule } from '@angular/router';
import {FundoListComponent} from "./fundo-list/fundo-list.component";
import {MatSelectModule} from "@angular/material/select";
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        FundoComponent,
        FundoListComponent

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


export class FundosModule { }
