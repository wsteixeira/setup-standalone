import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { firstValueFrom } from 'rxjs';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private http: HttpClient) {}

  loadConfig(): Promise<void> {
    return firstValueFrom(this.http.get('/assets/config.json'))
      .then((config: any) => {
        environment.apiUrl = config.apiUrl || environment.apiUrl;
      })
      .catch(() => {
        console.error(
          'Erro ao carregar config.json. Usando valores padrão do environment.'
        );
      });
  }
}
