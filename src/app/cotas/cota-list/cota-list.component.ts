import { Component, OnInit } from '@angular/core';
import {Cota} from "../cota/cota";
import {CotaService} from "../cota/cota.service";


@Component({
  selector: 'app-cota-list',
  templateUrl: './cota-list.component.html',
  styleUrls: ['./cota-list.component.css']
})
export class CotaListComponent implements OnInit {

  displayedColumns: string[] = ['id','fundo', 'dt_movimento', 'cod_fundo', 'cota_fundo'];

  dataSource: Cota[] = [];

  constructor(
    private cotaService: CotaService
) { }

  ngOnInit(): void {
    console.log(this.dataSource)
    this.cotaService
      .listJsonCota()
      .subscribe(dataSource => this.dataSource = dataSource);
  }

  //Chamada do model para formulário de add Arquivo



}
