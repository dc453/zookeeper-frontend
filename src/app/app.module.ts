import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectCharacterComponent } from './select-character/select-character.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { SelectHunterTypeComponent } from './select-hunter-type/select-hunter-type.component';
import { RatingsOptionPipe } from './ratings-option.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SelectCharacterComponent,
    CreateCharacterComponent,
    SelectHunterTypeComponent,
    RatingsOptionPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    // Material UI
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
