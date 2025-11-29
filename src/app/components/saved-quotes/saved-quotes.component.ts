import { Component, Signal } from '@angular/core';
import { QuoteCardComponent } from '../quote-card/quote-card.component';
import { QuoteSlateInterface } from 'src/app/interfaces/quote-slate.interface';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-saved-quotes',
  templateUrl: './saved-quotes.component.html',
  styleUrl: './saved-quotes.component.scss',
  standalone: true,
  imports: [QuoteCardComponent, MatButtonModule, MatIconModule],
})
export class SavedQuotesComponent {
  constructor(
    private router: Router,
    public sharedService: SharedService
  ) {}
  
  goToQuotes() {
    this.router.navigate(['/home']);
  }
}


