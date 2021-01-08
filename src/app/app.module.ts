import { MbscModule } from '@mobiscroll/angular';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatetimePickerModule } from './datetime-picker/datetime-picker.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DaterangePickerModule } from './daterange-picker/daterange-picker.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MbscModule,
    DatetimePickerModule,
    DaterangePickerModule,
    MatButtonModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
