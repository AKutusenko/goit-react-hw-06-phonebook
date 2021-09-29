import { createStore } from "redux";

const initialState = { contacts: ["Dereb "] };
console.log(initialState);

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "App/addContact":
      let duplicate = state.contacts.find(
        (contact) => contact.name === payload.name
      );
      if (duplicate) {
        return { ...state, error: "Такой контакт уже существует!" };
      } else {
        const contact = {
          id: payload.id,
          name: payload.name,
          number: payload.number,
        };

        return {
          contacts: [...state.contacts, contact],
        };
      }
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
