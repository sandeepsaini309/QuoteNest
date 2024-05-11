import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { QuoteInterface } from '../interfaces/quote.interface';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AnimeQuotesService {
  private apiBaseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  public async getRandomQuote(): Promise<QuoteInterface> {
    // return this.http.get<QuoteInterface>(`${this.apiBaseUrl}/random`);
    const request = this.http.get<QuoteInterface>(`${this.apiBaseUrl}/random`);
    return await lastValueFrom(request);
  }
}
