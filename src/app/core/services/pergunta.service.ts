import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Pergunta {
  id: string;
  temaId: string;
  conteudo: string;
  criadoEm: string;
}

const PERGUNTAS_KEY = 'hq_perguntas';

@Injectable({ providedIn: 'root' })
export class PerguntaService {
  private getPerguntas(): Pergunta[] {
    return JSON.parse(localStorage.getItem(PERGUNTAS_KEY) || '[]');
  }

  private savePerguntas(perguntas: Pergunta[]): void {
    localStorage.setItem(PERGUNTAS_KEY, JSON.stringify(perguntas));
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 7);
  }

  getByTema(temaId: string): Observable<Pergunta[]> {
    return of(this.getPerguntas().filter(p => p.temaId === temaId));
  }

  create(pergunta: Omit<Pergunta, 'id'>): Observable<Pergunta> {
    const perguntas = this.getPerguntas();
    const nova: Pergunta = { ...pergunta, id: this.generateId() };
    perguntas.push(nova);
    this.savePerguntas(perguntas);
    return of(nova);
  }
}
