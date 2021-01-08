import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaterangePickerComponent } from './daterange-picker.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { localePtBR, MbscModule, setOptions } from '@mobiscroll/angular';
import { PipesModule } from '../pipes/pipes.module';

setOptions({
  theme: 'material',
  themeVariant: 'light',
  locale: localePtBR,
});

@NgModule({
  declarations: [DaterangePickerComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MbscModule,
    PipesModule,
  ],
  exports: [DaterangePickerComponent],
})
export class DaterangePickerModule {}
