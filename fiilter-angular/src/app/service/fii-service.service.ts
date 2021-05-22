import { Injectable } from '@angular/core';
import { Fii } from '../models/Fii';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FiiService {
  backendUrl = 'http://localhost:3333';
  localFiis: Fii[];

  constructor(private http: HttpClient) {}

  getSomeFunds(): Observable<Fii[]> {
    return this.http.get<Fii[]>(`${this.backendUrl}/fewfunds`);
  }

  getAllFunds(): Observable<Fii[]> {
    return this.http.get<Fii[]>(`${this.backendUrl}/funds`);
  }

  getSetores(): Observable<string[]> {
    return this.http.get<string[]>(`${this.backendUrl}/sectors`);
  }

  getLocalFunds(): Fii[] {
    this.localFiis = [
      {
        id: 'ABCP11',
        setor: 'Shoppings',
        precoAtual: 84,
        liquidez: 3962,
        dividendo: 0,
        dy: 0,
        dy12Media: 0.45,
        pvpa: 0.98,
        rentabilidadeTotal: 0.47,
        vacanciaFisica: 1.4,
        vacanciaFinanceira: -999,
        qtdeAtivos: 1,
      },
      {
        id: 'ALMI11',
        setor: 'Lajes Corporativas',
        precoAtual: 1300,
        liquidez: 133,
        dividendo: 0,
        dy: 0,
        dy12Media: 0,
        pvpa: 0.65,
        rentabilidadeTotal: -999,
        vacanciaFisica: 78.56,
        vacanciaFinanceira: -999,
        qtdeAtivos: 1,
      },
      {
        id: 'ALZR11',
        setor: 'Logística',
        precoAtual: 108.27,
        liquidez: 12116,
        dividendo: 0.59,
        dy: 0.53,
        dy12Media: 0.5,
        pvpa: 1.14,
        rentabilidadeTotal: 0.63,
        vacanciaFisica: 0,
        vacanciaFinanceira: -999,
        qtdeAtivos: 7,
      },
      {
        id: 'ARRI11',
        setor: 'Títulos e Val. Mob.',
        precoAtual: 85.69,
        liquidez: 903,
        dividendo: 0.44,
        dy: 0.51,
        dy12Media: 0,
        pvpa: 0.93,
        rentabilidadeTotal: -2.53,
        vacanciaFisica: -999,
        vacanciaFinanceira: -999,
        qtdeAtivos: 0,
      },
      {
        id: 'ATSA11',
        setor: 'Shoppings',
        precoAtual: 124.99,
        liquidez: 7,
        dividendo: 0.25,
        dy: 0.18,
        dy12Media: 0.25,
        pvpa: 1.13,
        rentabilidadeTotal: -999,
        vacanciaFisica: 17.2,
        vacanciaFinanceira: -999,
        qtdeAtivos: 1,
      },
      {
        id: 'BARI11',
        setor: 'Títulos e Val. Mob.',
        precoAtual: 94,
        liquidez: 1178,
        dividendo: 0.63,
        dy: 0.67,
        dy12Media: 0,
        pvpa: 0.95,
        rentabilidadeTotal: -0.72,
        vacanciaFisica: -999,
        vacanciaFinanceira: -999,
        qtdeAtivos: 0,
      },
      {
        id: 'BBFI11B',
        setor: 'Lajes Corporativas',
        precoAtual: 2685,
        liquidez: 156,
        dividendo: 25,
        dy: 0.93,
        dy12Media: 0.94,
        pvpa: 0.85,
        rentabilidadeTotal: 1.55,
        vacanciaFisica: 72.2,
        vacanciaFinanceira: -999,
        qtdeAtivos: 2,
      },
      {
        id: 'BBPO11',
        setor: 'Lajes Corporativas',
        precoAtual: 152.11,
        liquidez: 16710,
        dividendo: 1.06,
        dy: 0.7,
        dy12Media: 0.69,
        pvpa: 1.49,
        rentabilidadeTotal: 1,
        vacanciaFisica: 0,
        vacanciaFinanceira: -999,
        qtdeAtivos: 64,
      },
      {
        id: 'BBRC11',
        setor: 'Outros',
        precoAtual: 138.5,
        liquidez: 1102,
        dividendo: 0.92,
        dy: 0.66,
        dy12Media: 0.68,
        pvpa: 1.25,
        rentabilidadeTotal: 0.89,
        vacanciaFisica: -999,
        vacanciaFinanceira: -999,
        qtdeAtivos: 20,
      },
      {
        id: 'BBVJ11',
        setor: 'Lajes Corporativas',
        precoAtual: 58.89,
        liquidez: 10,
        dividendo: 0.33,
        dy: 0.61,
        dy12Media: 0.08,
        pvpa: 1.02,
        rentabilidadeTotal: 0.58,
        vacanciaFisica: 70.4,
        vacanciaFinanceira: -999,
        qtdeAtivos: 1,
      },
      {
        id: 'BCFF11',
        setor: 'Títulos e Val. Mob.',
        precoAtual: 85.13,
        liquidez: 50261,
        dividendo: 0.4,
        dy: 0.51,
        dy12Media: 0.57,
        pvpa: 0.93,
        rentabilidadeTotal: -2.17,
        vacanciaFisica: -999,
        vacanciaFinanceira: -999,
        qtdeAtivos: 0,
      },
    ];
    return this.localFiis;
  }

  getLocalSetores(): string[] {
    return [
      'Shoppings',
      'Títulos e Val. Mob.',
      'Outros',
      'Lajes Corporativas',
      'Logística',
      'Hotel',
      'Hospital',
      'Residencial',
      'Híbrido',
    ];
  }
}
