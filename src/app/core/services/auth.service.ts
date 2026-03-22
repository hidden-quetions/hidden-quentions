import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { JsonbinService } from './jsonbin.service';

export interface Admin {
  id: string;
  nome: string;
  senha: string;
}

const ADMIN_KEY = 'hq_admin';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private jsonbin = inject(JsonbinService);

  login(nome: string, senha: string): Observable<Admin | null> {
    return this.jsonbin.getData().pipe(
      map(data => {
        const found = data.admins.find(a => a.nome === nome && a.senha === senha) || null;
        if (found) {
          localStorage.setItem(ADMIN_KEY, JSON.stringify(found));
        }
        return found;
      })
    );
  }

  logout(): void {
    localStorage.removeItem(ADMIN_KEY);
  }

  getAdmin(): Admin | null {
    const data = localStorage.getItem(ADMIN_KEY);
    return data ? JSON.parse(data) : null;
  }

  isLoggedIn(): boolean {
    return !!this.getAdmin();
  }

  setSessionAdmin(admin: Admin): void {
    localStorage.setItem(ADMIN_KEY, JSON.stringify(admin));
  }
}
