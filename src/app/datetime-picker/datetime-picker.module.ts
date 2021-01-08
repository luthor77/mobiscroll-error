import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatetimePickerComponent } from './datetime-picker.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MbscModule, setOptions, localePtBR } from '@mobiscroll/angular';
import { PipesModule } from '../pipes/pipes.module';

setOptions({
  theme: 'material',
  themeVariant: 'light',
  locale: localePtBR,
});

@NgModule({
  declarations: [DatetimePickerComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MbscModule,
    PipesModule,
  ],
  exports: [DatetimePickerComponent],
})
export class DatetimePickerModule {}
