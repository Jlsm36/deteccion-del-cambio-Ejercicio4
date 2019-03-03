import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';

import {
  LaunchesActionState, LoadLaunchState, LoadLaunchStated
} from './launchstate.actions';
import {ApiService} from "../../api.service";

@Injectable()
export class LauncherStateEffects {
  @Effect()
  LauncheStateEffect$ = this.actions$
    .ofType(LaunchesActionState.LoadLaunchState)
    .pipe(
      mergeMap((action: LoadLaunchState) =>
        this.api
          .getLaunchstatus()
          .pipe(map(launchstatus => new LoadLaunchStated(launchstatus)))
      )
    );

  constructor(private actions$: Actions, private api: ApiService) {}
}
