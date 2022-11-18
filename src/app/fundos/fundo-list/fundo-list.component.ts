import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FundoService } from '../../fundos/fundo/fundo.service';
import { Fundo } from '../fundo/fundo';


@Component({
  selector: 'app-fundo-list',
  templateUrl: './fundo-list.component.html',
  styleUrls: ['./fundo-list.component.css']
})
export class FundoListComponent implements OnInit {

  displayedColumns: string[] = ['id','nome_fundo', 'cnpj_fundo', 'data_abertura_fundo', 'data_encerramento_fundo', 'risco_fundo'];

  dataSource: Fundo[] = [];

  constructor(
    private fundoService: FundoService
  ) { }

  ngOnInit(): void {
    console.log(this.dataSource)
    this.fundoService
      .listJsonFundo()
      .subscribe(dataSource => this.dataSource = dataSource);
  }

  //Chamada do model para formulário de add Arquivo

}
