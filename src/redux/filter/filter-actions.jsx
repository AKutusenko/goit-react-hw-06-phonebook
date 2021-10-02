import { FILTER } from "../action-types";

export const filter = (text) => ({
  type: FILTER,
  payload: text,
});
