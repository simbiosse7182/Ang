import {NgModule} from '@angular/core';
import {MatButtonModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ]
})
export class CustomMaterialModule {
}
