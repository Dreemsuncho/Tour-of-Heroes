import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule, routableComponents } from './app-routing.module';

import { HeroService } from './hero.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroSearchComponent } from './hero-search.component';
import { HeroSearchService } from './hero-search.service';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        routableComponents,
        HeroSearchComponent,
        HeroSearchComponent
    ],
    providers: [HeroService, HeroSearchService],
    bootstrap: [AppComponent]
})
export class AppModule { }
