import { Routes } from '@angular/router';
import { PageGlobalPipeComponent } from './global-pipe';
import { PageDiffFormCtrlsComponent } from './diff-form-ctrls';
import { PageTemplateDrivenFrmComponent } from './template-driven-frm';
import { PageModelDrivenFrmComponent } from './model-driven-frm';
import { PageNestedModelDrivenFrmComponent } from './nested-model-driven-frm';
import { PageConditionalValModelDrivenFrmComponent } from './conditional-val-model-driven-frm';
import { PageHammerjsComponent } from './hammerjs';
import { PageCustomValidatorComponent } from './custom-validator';

export const appRoutes: Routes = [
  { path: 'global-pipe', component: PageGlobalPipeComponent },
  { path: 'diff-form-ctrls', component: PageDiffFormCtrlsComponent },
  { path: 'template-driven-frm', component: PageTemplateDrivenFrmComponent },
  { path: 'model-driven-frm', component: PageModelDrivenFrmComponent },
  { path: 'nested-model-driven-frm', component: PageNestedModelDrivenFrmComponent },
  { path: 'conditional-val-model-driven-frm', component: PageConditionalValModelDrivenFrmComponent },
  { path: 'hammerjs', component: PageHammerjsComponent },
  { path: 'custom-validator', component: PageCustomValidatorComponent },
  // { path: '', redirectTo: '/introducion', pathMatch: 'full' },
];
