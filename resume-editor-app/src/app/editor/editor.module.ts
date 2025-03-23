import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorRoutingModule } from './editor-routing.module';
import { FormComponent } from './form/form.component';
import { PreviewComponent } from './preview/preview.component';


@NgModule({
  declarations: [FormComponent, PreviewComponent],
  imports: [
    CommonModule,
    EditorRoutingModule,
  ],
})
export class EditorModule { }
