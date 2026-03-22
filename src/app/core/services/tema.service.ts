import { Injectable, inject } from '@angular/core';
import { Observable, switchMap, map } from 'rxjs';
import { JsonbinService } from './jsonbin.service';

export interface Tema {
  id: string;
  titulo: string;
  descricao: string;
  adminId: string;
  slug: string;
  ativo: boolean;
}

@Injectable({ providedIn: 'root' })
export class TemaService {
  private jsonbin = inject(JsonbinService);

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 7);
  }

  getAll(): Observable<Tema[]> {
    return this.jsonbin.getData().pipe(map(data => data.temas));
  }

  getByAdmin(adminId: string): Observable<Tema[]> {
    return this.jsonbin.getData().pipe(map(data => data.temas.filter(t => t.adminId === adminId)));
  }

  getBySlug(slug: string): Observable<Tema[]> {
    return this.jsonbin.getData().pipe(map(data => data.temas.filter(t => t.slug === slug)));
  }

  getById(id: string): Observable<Tema> {
    return this.jsonbin.getData().pipe(map(data => data.temas.find(t => t.id === id)!));
  }

  create(tema: Omit<Tema, 'id'>): Observable<Tema> {
    return this.jsonbin.getData().pipe(
      switchMap(data => {
        const novo: Tema = { ...tema, id: this.generateId() };
        data.temas.push(novo);
        return this.jsonbin.saveData(data).pipe(map(() => novo));
      })
    );
  }

  update(id: string, changes: Partial<Tema>): Observable<Tema> {
    return this.jsonbin.getData().pipe(
      switchMap(data => {
        const idx = data.temas.findIndex(t => t.id === id);
        if (idx >= 0) {
          data.temas[idx] = { ...data.temas[idx], ...changes };
          const updated = data.temas[idx];
          return this.jsonbin.saveData(data).pipe(map(() => updated));
        }
        return this.jsonbin.saveData(data).pipe(map(() => ({} as Tema)));
      })
    );
  }

  generateSlug(titulo: string): string {
    return titulo
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s]/g, '')
      .trim()
      .replace(/\s+/g, '-');
  }
}
