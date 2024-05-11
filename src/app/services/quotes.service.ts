import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { QuoteInterface } from '../interfaces/quote.interface';

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  private apiBaseUrl = environment.baseUrl;
  constructor(private http: HttpClient, private sharedService: SharedService) {}

  public async getRandomQuote(): Promise<QuoteInterface | null> {
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
