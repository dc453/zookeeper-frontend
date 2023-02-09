import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectCharacterComponent } from './select-character/select-character.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { SelectHunterTypeComponent } from './select-hunter-type/select-hunter-type.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectCharacterComponent,
    CreateCharacterComponent,
    SelectHunterTypeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

    // Material UI
    MatListModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
