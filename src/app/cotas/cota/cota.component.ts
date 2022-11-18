import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-cota',
  templateUrl: './cota.component.html',
  styleUrls: ['./cota.component.css']
})
export class CotaComponent  {

  title = 'Inova Asset';
  @Input() id = '';
  @Input() fundo = '';
  @Input() dt_movimento = '';
  @Input() cod_fundo = '';
  @Input() cota_fundo = '';
}
