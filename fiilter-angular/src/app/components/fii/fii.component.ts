import { Component, OnInit , Input } from '@angular/core';
import { Fii } from 'src/app/models/Fii';

@Component({
  selector: 'app-fii',
  templateUrl: './fii.component.html',
  styleUrls: ['./fii.component.css']
})
export class FiiComponent implements OnInit {
  @Input() fii:Fii;

  
  constructor() { }

  ngOnInit(): void {
  }

}
