import { ADD_CONTACT, REMOVE_CONTACT, FILTER } from "./action-types";

const initialState = {
  contacts: [],
  filter: "",
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      let duplicate = state.contacts.find(
        (contact) => contact.name === payload.name
      );
      if (duplicate) {
        alert("Такой контакт уже существует!");
        return state;
      } else {
        return { ...state, contacts: [...state.contacts, payload] };
      }
    case REMOVE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== payload),
      };
    case FILTER:
      return { ...state, filter: payload };

    default:
      return state;
  }
};
