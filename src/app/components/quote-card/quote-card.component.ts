import { MatIconModule } from '@angular/material/icon';
import { Component, Input } from '@angular/core';
import { QuoteInterface } from 'src/app/interfaces/quote.interface';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.scss'],
  imports: [MatIconModule],
})
export class QuoteCardComponent {
  @Input() quoteData!: QuoteInterface;
  constructor(public sharedService: SharedService) {}
  ngOnInit() {}

  ngOnDestroy() {}
}
