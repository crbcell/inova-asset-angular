import {Component, OnInit} from '@angular/core';

import { FundoService } from '../../fundos/fundo/fundo.service';
import { Fundo } from '../fundo/fundo';


@Component({
  selector: 'app-fundo-list',
  templateUrl: './fundo-list.component.html',
  styleUrls: ['./fundo-list.component.css']
})
export class FundoListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome_FUNDO','cnpj_FUNDO','data_ABERTURA_FUNDO','risco_FUNDO'];

  dataSource: Fundo[] = [];

  constructor(
    private fundoService: FundoService
  ) { }

  ngOnInit(): void {
    this.fundoService
      .listJsonFundo()
      .subscribe(dataSource => this.dataSource = dataSource);

    //console.log(this.fundoService.listJsonFundo())
    //console.log(this)
  }
  //Chamada do model para formulário de add Arquivo

}
