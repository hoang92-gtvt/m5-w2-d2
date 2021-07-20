import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import {FormsModule} from "@angular/forms";
import { NameCardComponent } from './name-card/name-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    NameCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
