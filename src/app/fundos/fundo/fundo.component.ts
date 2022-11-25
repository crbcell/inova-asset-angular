import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fundo',
  templateUrl: './fundo.component.html',
  styleUrls: ['./fundo.component.css']
})
export class FundoComponent {

 title = 'Inove Asset';
  @Input() id = '';
  @Input() nome_FUNDO = '';
  @Input() cnpj_FUNDO = '';
  @Input() data_ABERTURA_FUNDO = '';
  @Input() data_ENCERRAMENTO_FUNDO = '';
  @Input() risco_FUNDO='';

}
