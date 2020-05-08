import { Component, OnInit, ViewChild } from '@angular/core';
import { Fii } from 'src/app/models/Fii';
import { FiiService } from 'src/app/service/fii-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fiis-container',
  templateUrl: './fiis-container.component.html',
  styleUrls: ['./fiis-container.component.css']
})
export class FiisContainerComponent implements OnInit {
  fiis: Fii[];


  columnsToDisplay = ['codigo', 'setor', 'precoAtual', 'liquidez', 'dy', 'dy12Media', 'dividendo', 'pvpa', 'qtdeAtivos'];
  dataSource: MatTableDataSource<Fii>;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private fiiService: FiiService) { }

  ngOnInit(): void {
    this.localFunds();
    // this.apiFunds();
  }

  localFunds(){
    this.fiis = this.fiiService.getLocalFunds();
    this.dataSource = new MatTableDataSource(this.fiis);
    this.dataSource.sort = this.sort;
  }

  apiFunds(){
    this.fiiService.getSomeFunds().subscribe(fundos => {
      this.fiis = fundos;
      this.dataSource = new MatTableDataSource(this.fiis);
      this.dataSource.sort = this.sort;
    });
  }

  onFiltro(evento){

    console.log(evento.filtros);
    const filtrado = this.fiis.filter(f =>
       (f.liquidez >= evento.filtros.liquidez 
       && f.precoAtual <= evento.filtros.precoAtual ));
    console.log(this.fiis);
    this.dataSource = new MatTableDataSource(filtrado);
  }
}
