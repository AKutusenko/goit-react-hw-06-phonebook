import actionTypes from "./action-types";
import shortid from "shortid";

const addContact = (name, number) => ({
  type: actionTypes.ADD_CONTACT,
  payload: { id: shortid.generate(), name, number },
});

const removeContact = (contactId) => ({
  type: actionTypes.REMOVE_CONTACT,
  payload: contactId,
});

export default { addContact, removeContact };
