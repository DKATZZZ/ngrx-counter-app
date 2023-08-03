import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { CounterButtonsComponent } from './components/counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from './components/counter-output/counter-output.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './components/state/counter.reducer';
import { CustomCounterInputComponent } from './components/custom-counter-input/custom-counter-input.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { PostlistComponent } from './posts/postlist/postlist.component';
import { AppReducer } from 'src/store/app.state';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterButtonsComponent,
    CounterOutputComponent,
    CustomCounterInputComponent,
    HomeComponent,
    HeaderComponent,
    PostlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(AppReducer),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
