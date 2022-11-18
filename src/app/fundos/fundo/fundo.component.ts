import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fundo',
  templateUrl: './fundo.component.html',
  styleUrls: ['./fundo.component.css']
})
export class FundoComponent {

 title = 'Inove Asset';
  @Input() id = '';
  @Input() nome_fundo = '';
  @Input() cnpj_fundo = '';
  @Input() data_abertura_fundo = '';
  @Input() data_encerramento_fundo = '';
  @Input() risco_fundo='';

}
