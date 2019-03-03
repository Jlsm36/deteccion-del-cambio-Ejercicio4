import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';

import {
  LaunchesAction, LoadLaunched, LoadLaunches
} from './launches.actions';
import {ApiService} from "../../api.service";

@Injectable()
export class LauncherEffects {
  @Effect() LaunchesEffect$ = this.actions$
    .ofType(LaunchesAction.LoadLaunches)
    .pipe(
      mergeMap((action: LoadLaunches) =>
        this.api
          .getLaunches()
          .pipe(map(launches => new LoadLaunched(launches)))
      )
    );

  constructor(private actions$: Actions, private api: ApiService) {}
}
