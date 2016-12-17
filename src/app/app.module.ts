import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

// routing
import { appRoutes } from './app.routing';

// components
import { AppComponent } from './app.component';
import { PageGlobalPipeComponent, CapitalizePipe } from './global-pipe';
import { PageDiffFormCtrlsComponent } from './diff-form-ctrls';
import { PageTemplateDrivenFrmComponent } from './template-driven-frm';
import { PageModelDrivenFrmComponent } from './model-driven-frm';
import { PageNestedModelDrivenFrmComponent } from './nested-model-driven-frm';
import { PageConditionalValModelDrivenFrmComponent } from './conditional-val-model-driven-frm';
import { PageHammerjsComponent, MyHammerConfig } from './hammerjs';
import { PageCustomValidatorComponent, EqualValidatorDirective } from './custom-validator';

@NgModule({
  declarations: [
    AppComponent,
    // implement pipe
    PageGlobalPipeComponent, CapitalizePipe,
    // dealing with different form controls
    PageDiffFormCtrlsComponent,
    // template driven form
    PageTemplateDrivenFrmComponent,
    // model driven form
    PageModelDrivenFrmComponent,
    // nested model driven form
    PageNestedModelDrivenFrmComponent,
    // conditional validation model driven form
    PageConditionalValModelDrivenFrmComponent,
    // using hammerjs
    PageHammerjsComponent,
    // implement a Custom Validator Directive (Confirm Password)
    PageCustomValidatorComponent, EqualValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
