import { useState } from "react";
import ContactList from "./components/ContactList/ContactList";
// import shortid from "shortid";
import Form from "./components/Form/Form";
import Filter from "./components/Filter/Filter";
import s from "./App.module.css";
// import { store } from "./redux/store";
import { connect } from "react-redux";
import * as actions from "./redux/actions";

function App({ contacts, addContact, removeContact }) {
  // const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  // console.log(store.getState());
  console.log(contacts);

  // useEffect(() => {
  //   const contacts = JSON.parse(localStorage.getItem("contacts"));
  //   if (contacts) {
  //     setContacts(contacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   const contacts = JSON.parse(localStorage.getItem("contacts"));
  //   if (contacts) {
  //     store.setState(contacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(store.getState().contacts));
  // }, [contacts]);

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  return (
    <>
      <h1 className={s}>Phonebook</h1>
      <Form onSubmit={addContact} />
      <h2 className={s}>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        // contacts={getVisibleContacts()}
        contacts={contacts}
        onRemoveContact={removeContact}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return { contacts: state.contacts };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (name, number) => dispatch(actions.addContact(name, number)),
    removeContact: (id) => dispatch(actions.removeContact(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
