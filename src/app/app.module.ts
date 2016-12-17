import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

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

@NgModule({
  declarations: [
    AppComponent,
    // implement pipe
    PageGlobalPipeComponent,
    CapitalizePipe,
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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
