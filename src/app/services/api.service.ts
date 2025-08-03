import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SharedService } from './shared.service';
import { AnimeQuoteInterface } from '../interfaces/anime-quote.interface';
import { QuoteSlateInterface } from '../interfaces/quote-slate.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private sharedService: SharedService
  ) { }

  public cachedQuote: QuoteSlateInterface | null = null;

  public async getQuoteSlateRandomQuote(forceRefresh = false): Promise<QuoteSlateInterface | null> {
    if (!forceRefresh && this.cachedQuote) {
      return this.cachedQuote;
    }
    try {
      const request = this.http.get<QuoteSlateInterface>(
        `${environment.QS_API_BASE_URL}/quotes/random`
      );
      const result = await lastValueFrom(request);
      this.cachedQuote = result;
      return result;
    } catch (e: any) {
      console.error('getQuoteSlateRandomQuote error', e);
      this.sharedService.openSnackBar(e.statusText || 'Something went wrong!');
      return null;
    }
  }

  // Anime Quote API
  public async getAnimeRandomQuote(): Promise<AnimeQuoteInterface | null> {
    try {
      const request = this.http.get<AnimeQuoteInterface>(
        `${environment.ANIME_API_BASE_URL}/quotes/random`
      );
      return await lastValueFrom(request);
    } catch (e: any) {
      console.error('getAnimeRandomQuote error', e);
      this.sharedService.openSnackBar(e.statusText || 'Something went wrong!');
      return null;
    }
  }
}
