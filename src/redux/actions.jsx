import { ADD_CONTACT, REMOVE_CONTACT, FILTER } from "./action-types";
import shortid from "shortid";

export const addContact = (name, number) => ({
  type: ADD_CONTACT,
  payload: { name, number, id: shortid.generate() },
});

export const removeContact = (id) => ({
  type: REMOVE_CONTACT,
  payload: id,
});

export const filter = (text) => ({
  type: FILTER,
  payload: text,
});
