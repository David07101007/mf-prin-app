import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { SelectorComponent } from './selector/selector.component';

const routes: Routes = [
  { path: 'list', component: ListComponent},
  { path: 'selector', component: SelectorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplatesRoutingModule { }
