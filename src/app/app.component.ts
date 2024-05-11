import { Component } from '@angular/core';
// import { Subscription } from 'rxjs';
import { AnimeQuotesService } from './services/anime-quotes.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public quoteObj: any;
  // private getRandomQuoteSub!: Subscription;

  constructor(
    private animeQuotesService: AnimeQuotesService,
    private spinner: NgxSpinnerService
  ) {}

  async ngOnInit() {
    this.spinner.show();
    await this.getRandomQuote();
    this.spinner.hide();
  }

  private async getRandomQuote() {
    // const getRandomQuoteData = this.animeQuotesService.getRandomQuote();
    // this.getRandomQuoteSub = getRandomQuoteData.subscribe((res) => {
    //   console.log('getRandomQuoteSub res', res);
    //   this.quoteObj = res;
    // });

    const getRandomQuoteData = await this.animeQuotesService.getRandomQuote();
    console.log('getRandomQuoteData', getRandomQuoteData);
    if (getRandomQuoteData) this.quoteObj = getRandomQuoteData;
  }

  ngOnDestroy() {
    // this.getRandomQuoteSub.unsubscribe();
    console.log('ngOnDestroy');
  }
}
