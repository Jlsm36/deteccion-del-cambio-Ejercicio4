import { Action } from '@ngrx/store';


export enum LaunchesActionState {
  LoadLaunchState = '[LaunchesState] Load LaunchesState',
  LoadLaunchStated = '[LaunchesState] Load LaunchStated'
}

export class LoadLaunchState implements Action {
  readonly type = LaunchesActionState.LoadLaunchState;
  constructor() {}
}
export class LoadLaunchStated implements Action {
  readonly type = LaunchesActionState.LoadLaunchStated;
  constructor(public readonly payload: any[]) {}
}

export type LaunchstateActions = LoadLaunchState | LoadLaunchStated;
