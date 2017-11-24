import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule, MatListModule, MatMenuModule, MatSnackBarModule, MatTabsModule,
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
  MatSnackBarModule
];

@NgModule({
  imports: ports,
  exports: ports
})
export class MaterialModule {}
