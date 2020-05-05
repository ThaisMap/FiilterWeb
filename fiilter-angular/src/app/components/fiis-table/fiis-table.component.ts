import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Fii } from 'src/app/models/Fii';
import { FilterUtils } from 'primeng/utils';
import { TableModule } from "primeng/table";
import { SelectItem } from 'primeng/api/selectitem';


@Component({
  selector: 'app-fiis-table',
  templateUrl: './fiis-table.component.html',
  styleUrls: ['./fiis-table.component.css']
})
export class FiisTableComponent implements OnInit {

  fiis: Fii[];
  setores: SelectItem[];

  cols: any[];

  liquidezTimeout: any;
  liquidezFilter: number;
 
  constructor(private fiiService: ApiService) { }

  ngOnInit(): void {
    this.fiis = this.fiiService.getLocalFunds();
    //this.fiiService.getSetores().subscribe(setores => setores.map( s => this.setores.push({ label: s, value: s })));

    this.setores = [
      { label: 'Todos', value: null },
      { label: 'Shoppings', value: 'Shoppings' },
      { label: 'Títulos e Val. Mob.', value: 'Títulos e Val. Mob.' },
      { label: 'Outros', value: 'Outros' },
      { label: 'Lajes Corporativas', value: 'Lajes Corporativas' },
      { label: 'Logística', value: 'Logística' },
      { label: 'Hotel', value: 'Hotel' },
      { label: 'Hospital', value: 'Hospital' },
      { label: 'Residencial', value: 'Residencial' },
      { label: 'Híbrido', value: 'Híbrido' }
    ];

    this.cols = [
      { field: 'codigo', header: 'Código'},
      { field: 'setor', header: 'Setor'},
      { field: 'precoAtual', header: 'Preço'},
      { field: 'liquidez', header: 'Liquidez'}
    ];

    FilterUtils['custom'] = (value, filter): boolean => {
      if(filter === undefined || filter === null || filter.trim() === ''){
        return true;
      }

      if(value === undefined || value === null){
        return false;
      }

      return parseInt(filter) > value;
    }
  }

  onLiquidezChange(event, dt) {
    if (this.liquidezTimeout) {
        clearTimeout(this.liquidezTimeout);
    }

    this.liquidezTimeout = setTimeout(() => {
        dt.filter(event.value, 'liquidez', 'gt');
    }, 250);
}

 

}
