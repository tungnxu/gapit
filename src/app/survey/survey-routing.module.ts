import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExportComponent } from './export/export.component';

import { SurveyComponent } from './survey.component';

const routes: Routes = [{ path: '', component: SurveyComponent },{ path: 'export', component: ExportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyRoutingModule { }
