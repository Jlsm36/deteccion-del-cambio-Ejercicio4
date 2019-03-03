import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container.component';
import {ApiService} from "./api.service";
import { SearchPresenterComponent } from './search-presenter.component';
import { FilterPresenterComponent } from './filter-presenter.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {HttpClientModule} from "@angular/common/http";
import {EffectsModule} from "@ngrx/effects";


import {AgenciesEffects} from "./reducers/agencies/agencies.effects";
import {LauncherEffects} from "./reducers/launches/launches.effects";
import {TypesEffects} from "./reducers/launchtypes/launchtypes.effects";
import {LauncherStateEffects} from "./reducers/launchstate/launchstate.effects";
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    SearchPresenterComponent,
    FilterPresenterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,StoreModule.forRoot(reducers, { metaReducers }),
    // StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    EffectsModule.forRoot([LauncherEffects,AgenciesEffects, TypesEffects,LauncherStateEffects]),
    environment.production ? StoreDevtoolsModule.instrument() : [],
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })

  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
