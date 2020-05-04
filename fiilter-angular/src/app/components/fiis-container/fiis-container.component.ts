import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Fii } from 'src/app/models/Fii';

@Component({
  selector: 'app-fiis-container',
  templateUrl: './fiis-container.component.html',
  styleUrls: ['./fiis-container.component.css']
})
export class FiisContainerComponent implements OnInit {

  fiis:Fii[];

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.getSomeFunds().subscribe(fiis => this.fiis = fiis);
  }

}
