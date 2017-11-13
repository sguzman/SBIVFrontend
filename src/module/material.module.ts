import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatMenuModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';

const ports = [
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatTabsModule,
  MatListModule
];

@NgModule({
  imports: ports,
  exports: ports
})
export class MaterialModule {}
