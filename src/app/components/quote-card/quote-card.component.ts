import { Component, Input } from '@angular/core';
import { QuoteInterface } from '../../interfaces/quote.interface';
import { SharedService } from '../../services/shared.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { CardThemeDirective } from '../../directives/card-theme.directive';

@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatTooltipModule, MatRippleModule, CardThemeDirective],
})
export class QuoteCardComponent {
  @Input() quoteData!: QuoteInterface;
  constructor(public sharedService: SharedService) {}
  ngOnInit() {}

  ngOnDestroy() {}
}
