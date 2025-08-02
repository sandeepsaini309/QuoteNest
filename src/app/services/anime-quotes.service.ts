import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { SharedService } from './shared.service';
import { AnimeQuoteInterface } from '../interfaces/anime-quote.interface';

@Injectable({
  providedIn: 'root',
})
export class AnimeQuotesService {
  private apiBaseUrl = environment.baseUrl;
  constructor(private http: HttpClient, private sharedService: SharedService) {}

  public async getRandomQuote(): Promise<AnimeQuoteInterface | null> {
    // return this.http.get<AnimeQuoteInterface>(`${this.apiBaseUrl}/random`);

    try {
      const request = this.http.get<AnimeQuoteInterface>(
        `${this.apiBaseUrl}/random`
      );
      return await lastValueFrom(request);
    } catch (e: any) {
      console.error('getRandomQuote error', e);
      this.sharedService.openSnackBar(e.statusText || 'Something went wrong!');
      return null;
    }
  }
}
