import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesRoutingModule } from './templates-routing.module';
import { ListComponent } from './list/list.component';
import { SelectorComponent } from './selector/selector.component';


@NgModule({
  declarations: [ListComponent,SelectorComponent],
  imports: [
    CommonModule,
    TemplatesRoutingModule,
  ],
})
export class TemplatesModule { }
