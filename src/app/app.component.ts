import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AnimeQuotesService } from './services/anime-quotes.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'QuotesApp';
  public quoteObj: any;
  private getRandomQuoteSub!: Subscription;
  constructor(
    private animeQuotesService: AnimeQuotesService,
    private spinner: NgxSpinnerService
  ) {}
  ngOnInit() {
    this.spinner.show();
    const getRandomQuoteData = this.animeQuotesService.getRandomQuote();
    this.getRandomQuoteSub = getRandomQuoteData.subscribe((res) => {
      console.log('getRandomQuoteSub res', res);
      this.quoteObj = res;
    });
    this.spinner.hide();
  }

  ngOnDestroy() {
    this.getRandomQuoteSub.unsubscribe();
    console.log('ngOnDestroy');
  }
}
