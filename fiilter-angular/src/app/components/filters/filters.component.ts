import { Component, OnInit, Output, EventEmitter, Type } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FiiService } from 'src/app/service/fii-service.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Output() filtro = new EventEmitter();

  formulario: FormGroup;

  setores: string[];

  constructor(
    private formBuilder: FormBuilder,
    private fiiService: FiiService) { }

  ngOnInit(): void {
    this.setores = this.fiiService.getLocalSetores();

    this.formulario = this.formBuilder.group({
      precoAtual: [null],
      liquidez: [null],
      dy12Media: [null],
      pvpa: [null],
      qtdeAtivos: [null],
      setores: [null]
    });
  }

  enviarFiltro() {
    this.filtro.emit({ filtros: this.formulario.value });
  }

  resetFilters(){
    console.log(this.formulario);
    //this.formulario.reset();
    this.enviarFiltro();
  }

}
