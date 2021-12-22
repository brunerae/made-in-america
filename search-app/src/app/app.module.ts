import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsaAccordionModule, UsaSearchModule, USWDSDropdownModule } from 'uswds-components';
import { AppRoutingModule } from './app.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { MarkdownModule } from 'ngx-markdown';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ThemeSwitcherModule } from './shared/theme-switcher/theme-switcher.module';
import { ThemeSwitcherService } from './shared/theme-switcher/theme-switcher.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchResultModule } from './search-result/search-result.module';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [AppComponent, PaginationComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ThemeSwitcherModule,
    UsaSearchModule,
    USWDSDropdownModule,
    UsaAccordionModule,
    MarkdownModule.forRoot(),
    SearchResultModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [
    ThemeSwitcherService,
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          xml: () => import('highlight.js/lib/languages/xml'),
        },
      },
    },
  ],
  bootstrap: [AppComponent],
  exports: [PaginationComponent],
})
export class AppModule {}