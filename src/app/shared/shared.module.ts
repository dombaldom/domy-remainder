import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LangularComponent } from './components/langular/langular.component';



@NgModule({
  declarations: [ToolbarComponent, LangularComponent],
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  exports: [ToolbarComponent ]
})
export class SharedModule { }
