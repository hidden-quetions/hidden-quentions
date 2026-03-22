import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Tema {
  id: string;
  titulo: string;
  descricao: string;
  adminId: string;
  slug: string;
  ativo: boolean;
}

const TEMAS_KEY = 'hq_temas';

@Injectable({ providedIn: 'root' })
export class TemaService {
  private getTemas(): Tema[] {
    return JSON.parse(localStorage.getItem(TEMAS_KEY) || '[]');
  }

  private saveTemas(temas: Tema[]): void {
    localStorage.setItem(TEMAS_KEY, JSON.stringify(temas));
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 7);
  }

  getAll(): Observable<Tema[]> {
    return of(this.getTemas());
  }

  getByAdmin(adminId: string): Observable<Tema[]> {
    return of(this.getTemas().filter(t => t.adminId === adminId));
  }

  getBySlug(slug: string): Observable<Tema[]> {
    return of(this.getTemas().filter(t => t.slug === slug));
  }

  getById(id: string): Observable<Tema> {
    const tema = this.getTemas().find(t => t.id === id);
    return of(tema!);
  }

  create(tema: Omit<Tema, 'id'>): Observable<Tema> {
    const temas = this.getTemas();
    const novo: Tema = { ...tema, id: this.generateId() };
    temas.push(novo);
    this.saveTemas(temas);
    return of(novo);
  }

  update(id: string, changes: Partial<Tema>): Observable<Tema> {
    const temas = this.getTemas();
    const idx = temas.findIndex(t => t.id === id);
    if (idx >= 0) {
      temas[idx] = { ...temas[idx], ...changes };
      this.saveTemas(temas);
      return of(temas[idx]);
    }
    return of({} as Tema);
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
