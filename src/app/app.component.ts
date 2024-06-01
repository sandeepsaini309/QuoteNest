import { Component } from '@angular/core';
// import { Subscription } from 'rxjs';
import { AnimeQuotesService } from './services/anime-quotes.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { QuotesService } from './services/quotes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public quoteObj: any;
  // private getRandomQuoteSub!: Subscription;
  screenWidth: number;

  constructor(
    private quotesService: QuotesService,
    private spinner: NgxSpinnerService
  ) {
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
      // * set screenWidth on screen size change
      this.screenWidth = window.innerWidth;
    };
  }

  ngOnInit() {
    this.getRandomQuote();
  }

  public async getRandomQuote() {
    // const getRandomQuoteData = this.animeQuotesService.getRandomQuote();
    // this.getRandomQuoteSub = getRandomQuoteData.subscribe((res) => {
    //   console.log('getRandomQuoteSub res', res);
    //   this.quoteObj = res;
    // });

    this.spinner.show();
    const getRandomQuoteData = await this.quotesService.getRandomQuote();
    this.spinner.hide();
    console.log('getRandomQuoteData', getRandomQuoteData);
    if (getRandomQuoteData) this.quoteObj = getRandomQuoteData;
  }

  ngOnDestroy() {
    // this.getRandomQuoteSub.unsubscribe();
    console.log('ngOnDestroy');
  }
}
