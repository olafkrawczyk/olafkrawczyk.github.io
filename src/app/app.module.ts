import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RoundProgressModule} from 'angular-svg-round-progressbar';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { TechnologyItemComponent } from './technologies/technology-item/technology-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TechnologiesComponent,
    TechnologyItemComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RoundProgressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
