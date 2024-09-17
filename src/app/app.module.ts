import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './_layout/header/header.module';
import { BodyModule } from './_layout/body/body.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    BodyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
