import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { AppReducer } from 'src/store/app.state';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AuthEffects } from './auth/state/auth.effects';
import { LoadingspinnerComponent } from './shared/loadingspinner/loadingspinner.component';
import { AuthtokenInterceptor } from './services/authtoken.interceptor';
import { CustomSerializer } from 'src/store/router/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoadingspinnerComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(AppReducer),
    AppRoutingModule,
    StoreRouterConnectingModule.forRoot({
      serializer:CustomSerializer
    })
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthtokenInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
