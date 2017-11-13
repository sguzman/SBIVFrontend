import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule, MatListModule, MatMenuModule, MatTabsModule,
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
  MatCheckboxModule
];

@NgModule({
  imports: ports,
  exports: ports
})
export class MaterialModule {}
