import {LaunchesAction, LaunchesActions} from './launches.actions';

export interface LaunchesState {
  launches;
  loading: boolean;
}

export const initialState: LaunchesState = {
  launches: [],
  loading: false
};

export function reducer(state = initialState, action: LaunchesActions): LaunchesState {
  switch (action.type) {
    case LaunchesAction.LoadLaunches:
      return { ...state, loading: true };
    case LaunchesAction.LoadLaunched:
      return { loading: false, launches: action.payload };
    default:
      return state;
  }
}
