import { FILTER } from "../action-types";

export const filterReducer = (state = "", { type, payload }) => {
  switch (type) {
    case FILTER:
      return payload;

    default:
      return state;
  }
};
