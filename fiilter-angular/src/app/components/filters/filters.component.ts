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
      codigo: [null],
      precoAtual: [200],
      liquidez: [1000],
      dy12Media: [100],
      pvpa: [3],
    });
  }

  onSubmit() {
    this.filtro.emit({ filtros: this.formulario.value });
  }

}
