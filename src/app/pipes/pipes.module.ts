import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FnPipe } from './fn.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [FnPipe],
  exports: [FnPipe],
})
export class PipesModule {}
