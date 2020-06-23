import { Domain, ADD_DOMAIN } from "./types";

export function addDomain(domain: Domain) {
  return {
    type: ADD_DOMAIN,
    payload: domain,
  };
}
