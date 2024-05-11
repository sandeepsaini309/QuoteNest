import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { QuoteInterface } from '../interfaces/quote.interface';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root',
})
export class AnimeQuotesService {
  private apiBaseUrl = environment.baseUrl;
  constructor(private http: HttpClient, private sharedService: SharedService) {}

  public async getRandomQuote(): Promise<QuoteInterface | null> {
    // return this.http.get<QuoteInterface>(`${this.apiBaseUrl}/random`);

    try {
      const request = this.http.get<QuoteInterface>(
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
