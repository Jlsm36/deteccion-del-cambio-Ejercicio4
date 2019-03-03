import {LaunchesActionState,  LaunchstateActions} from './launchstate.actions';


export interface LaunchesStatus {
  launchstatus;
  loading: boolean;
}

export const initialState: LaunchesStatus = {
  launchstatus: [],
  loading: false
};

export function reducer(state = initialState, action: LaunchstateActions): LaunchesStatus {
  switch (action.type) {
    case LaunchesActionState.LoadLaunchState:
      return { ...state, loading: true };
    case LaunchesActionState.LoadLaunchStated:
      return { loading: false, launchstatus: action.payload };
    default:
      return state;
  }
}
