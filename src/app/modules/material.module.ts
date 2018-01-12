import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatSlideToggleModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatSlideToggleModule
  ]
})
export class MaterialModule { }
