export interface Domain {
  id: string;
  name: string;
}

export interface DomainState {
    domains: Domain[]
}

export const ADD_DOMAIN = "domain/ADD";

interface AddDomainAction {
    type: typeof ADD_DOMAIN,
    payload: Domain;
}

export type DomainActionState = AddDomainAction;