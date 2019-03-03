import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromAgencies from './agencies/agencies.reducer';
import * as fromLaunchesStatus from './launchstate/launchstate.reducer';
import * as fromLaunches from './launches/launches.reducer';
import * as fromTypes from './launchtypes/launchtypes.reducer';

export interface State {
  agencies: fromAgencies.AgenciesState;
  launchstatus: fromLaunchesStatus.LaunchesStatus;
  missiontypes: fromTypes.TypesState;
  launches: fromLaunches.LaunchesState;

}

export const reducers: ActionReducerMap<State> = {
  agencies: fromAgencies.reducer,
  launchstatus: fromLaunchesStatus.reducer,
  missiontypes: fromTypes.reducer,
  launches: fromLaunches.reducer

};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
