import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatHeaderCell, MatIconModule, MatListModule, MatMenuModule, MatSnackBarModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';

const ports = [
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatTabsModule,
  MatListModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MatTableModule
];

@NgModule({
  imports: ports,
  exports: ports
})
export class MaterialModule {}
