import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Output() filtro = new EventEmitter();

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      precoAtual: [null],
      liquidez: [null],
      dy12Media: [null],
      pvpa: [null],
      qtdeAtivos: [null],
    });
  }

  enviarFiltro() {
    this.filtro.emit({ filtros: this.formulario.value });
  }

}
