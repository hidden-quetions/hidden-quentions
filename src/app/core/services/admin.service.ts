import { Injectable, inject } from '@angular/core';
import { Observable, switchMap, map } from 'rxjs';
import { Admin, AuthService } from './auth.service';
import { JsonbinService } from './jsonbin.service';

@Injectable({ providedIn: 'root' })
export class AdminService {
  private authService = inject(AuthService);
  private jsonbin = inject(JsonbinService);

  update(id: string, changes: Partial<Admin>): Observable<Admin> {
    return this.jsonbin.getData().pipe(
      switchMap(data => {
        const idx = data.admins.findIndex(a => a.id === id);
        if (idx >= 0) {
          data.admins[idx] = { ...data.admins[idx], ...changes };
          const updated = data.admins[idx];
          return this.jsonbin.saveData(data).pipe(
            map(() => {
              this.authService.setSessionAdmin(updated);
              return updated;
            })
          );
        }
        return this.jsonbin.saveData(data).pipe(map(() => ({ id, nome: '', senha: '', ...changes } as Admin)));
      })
    );
  }
}
