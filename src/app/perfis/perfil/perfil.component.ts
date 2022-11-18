import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  perfil: string;
  position: number;
  risco: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, perfil: 'PERFIL CONSERVADOR', risco: 'BAIXO'},
  {position: 2, perfil: 'PERFIL MODERADO', risco: 'MEDIO'},
  {position: 3, perfil: 'PERFIL ARROJADO', risco: 'ALTO'},

];

/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  displayedColumns: string[] = ['position', 'perfil', 'risco'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}


/**  Copyright 2022 Google LLC. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at https://angular.io/license */
