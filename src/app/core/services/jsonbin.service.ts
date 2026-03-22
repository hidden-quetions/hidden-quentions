import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Admin } from './auth.service';
import { Tema } from './tema.service';
import { Pergunta } from './pergunta.service';

export interface DbData {
  admins: Admin[];
  temas: Tema[];
  perguntas: Pergunta[];
}

@Injectable({ providedIn: 'root' })
export class JsonbinService {
  private http = inject(HttpClient);

  private readonly BIN_ID = '69bf3358b7ec241ddc8def5c';
  private readonly API_KEY = '$2a$10$HS24DqE71MJDk7CWqmUHkuRBHfEKqM3LIDHg8dpsha7Ii2a48.MGe';
  private readonly BASE_URL = 'https://api.jsonbin.io/v3';

  private get headers(): HttpHeaders {
    return new HttpHeaders({
      'X-Master-Key': this.API_KEY,
      'Content-Type': 'application/json',
      'X-Bin-Versioning': 'false'
    });
  }

  getData(): Observable<DbData> {
    return this.http
      .get<{ record: DbData }>(`${this.BASE_URL}/b/${this.BIN_ID}/latest`, { headers: this.headers })
      .pipe(map(res => res.record));
  }

  saveData(data: DbData): Observable<DbData> {
    return this.http
      .put<{ record: DbData }>(`${this.BASE_URL}/b/${this.BIN_ID}`, data, { headers: this.headers })
      .pipe(map(res => res.record));
  }
}
