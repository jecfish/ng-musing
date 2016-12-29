import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import 'rxjs/Rx';

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
import { TRANSLATION1_PROVIDERS, Translate1Pipe, 
  Translate1Service, PageSimpleLanguageTranslationPart1Component }   from './simple-language-translation-part-1';
import { TRANSLATION2_PROVIDERS, Translate2Pipe, 
  Translate2Service, PageSimpleLanguageTranslationPart2Component }   from './simple-language-translation-part-2';
import { CardComponent, PageTransclusionComponent } from './transclusion';
import { PageComponentInheritanceComponent, MyPaginationComponent, 
  SimplePaginationComponent } from './component-inheritance';
import { PageHomeComponent, HomeService } from './home';
import { DepAService, DepBService,
  DepCtnComponent, DepInjectComponent, PageDepInjectComponent } from './dep-inject';
import { PageFormArrayDynValComponent } from './form-array-dyn-val';

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
    PageCustomValidatorComponent, EqualValidatorDirective,
    // Simple Language Translation (Part 1)
    PageSimpleLanguageTranslationPart1Component, Translate1Pipe,
    // Simple Language Translation (Part 2)
    PageSimpleLanguageTranslationPart2Component, Translate2Pipe,
    // Transclusion using ng-content
    PageTransclusionComponent, CardComponent,
    // Component Inheritance
    PageComponentInheritanceComponent,
    SimplePaginationComponent, MyPaginationComponent,
    // home page
    PageHomeComponent,
    // dependency inject
    PageDepInjectComponent, DepCtnComponent, DepInjectComponent,
    // Dynamic Form Array Validation in Model Driven Form
    PageFormArrayDynValComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig },
    // Simple Language Translation (Part 1)
    TRANSLATION1_PROVIDERS, Translate1Service,
    // Simple Language Translation (Part 2)
    TRANSLATION2_PROVIDERS, Translate2Service,
    // home page
    HomeService,
    // dependency injection
    DepAService, 
    // { provide: DepAService, useValue: { getGreeting(name) { return 'yahoo ' + name; } } },
    // { provide: DepAService, useClass:  class { getGreeting(name) { return 'class ' + name; } } },
    // DepBService
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
