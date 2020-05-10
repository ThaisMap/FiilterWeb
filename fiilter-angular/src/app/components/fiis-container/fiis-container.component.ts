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

  apiSomeFunds(){
    this.fiiService.getSomeFunds().subscribe(fundos => {
      this.fiis = fundos;
      this.dataSource = new MatTableDataSource(this.fiis);
      this.dataSource.sort = this.sort;
    });
  }

  apiFunds(){
    this.fiiService.getAllFunds().subscribe(fundos => {
      this.fiis = fundos;
      this.dataSource = new MatTableDataSource(this.fiis);
      this.dataSource.sort = this.sort;
    });
  }

  onFiltro(evento){
    console.log(evento.filtros);
    let filtrado = this.fiis.filter(f =>
       (f.liquidez >= evento.filtros.liquidez &&
        f.qtdeAtivos >= evento.filtros.qtdeAtivos &&
        f.dy12Media >= evento.filtros.dy12Media));
    if(evento.filtros.precoAtual != "" && evento.filtros.precoAtual != null)
    {
      filtrado = filtrado.filter(f => f.precoAtual <= evento.filtros.precoAtual);
    }
      
    if(evento.filtros.pvpa != "" && evento.filtros.pvpa != null)
    {
      filtrado = filtrado.filter(f => f.pvpa <= evento.filtros.pvpa);
    }
    
    this.dataSource = new MatTableDataSource(filtrado);
  }
}
