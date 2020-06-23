import { DomainState, DomainActionState, ADD_DOMAIN } from "./types";

const initialState: DomainState = {
  domains: [],
};

export function domainReducer(
  state: DomainState = initialState,
  action: DomainActionState
): DomainState {
  switch (action.type) {
    case ADD_DOMAIN:
      return {
        domains: [...state.domains, action.payload],
      };
    default:
      return state;
  }
}
