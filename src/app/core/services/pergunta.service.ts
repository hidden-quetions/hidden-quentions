import { Injectable, inject } from '@angular/core';
import { Observable, switchMap, map } from 'rxjs';
import { JsonbinService } from './jsonbin.service';

export interface Pergunta {
  id: string;
  temaId: string;
  conteudo: string;
  criadoEm: string;
}

@Injectable({ providedIn: 'root' })
export class PerguntaService {
  private jsonbin = inject(JsonbinService);

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 7);
  }

  getByTema(temaId: string): Observable<Pergunta[]> {
    return this.jsonbin.getData().pipe(map(data => data.perguntas.filter(p => p.temaId === temaId)));
  }

  create(pergunta: Omit<Pergunta, 'id'>): Observable<Pergunta> {
    return this.jsonbin.getData().pipe(
      switchMap(data => {
        const nova: Pergunta = { ...pergunta, id: this.generateId() };
        data.perguntas.push(nova);
        return this.jsonbin.saveData(data).pipe(map(() => nova));
      })
    );
  }
}
