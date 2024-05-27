import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { ClipboardModule } from '@angular/cdk/clipboard';
const MaterialComponents = [
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatListModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatInputModule,
  MatRippleModule,
  MatCardModule,
  ClipboardModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule {}
