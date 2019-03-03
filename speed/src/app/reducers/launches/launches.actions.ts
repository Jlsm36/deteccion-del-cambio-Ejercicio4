import { Action } from '@ngrx/store';

export enum LaunchesAction {
  LoadLaunches = '[Launches] Load Launches',
  LoadLaunched = '[Launches] Load Launched'
}

export class LoadLaunches implements Action {
  readonly type = LaunchesAction.LoadLaunches;
  constructor() {}
}
export class LoadLaunched implements Action {
  readonly type = LaunchesAction.LoadLaunched;
  constructor(public readonly payload: any[]) {}
}

export type LaunchesActions = LoadLaunches | LoadLaunched;
