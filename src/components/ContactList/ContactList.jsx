import s from "./ContactList.module.css";

export default function ContactList({ contacts, onRemoveContact }) {
  return (
    <ul className={s.list}>
      {contacts &&
        contacts.map(({ name, number, id }) => (
          <li className={s.listItem} key={id}>
            {`${name}: ${number}`}
            <button
              className={s.btn}
              type="button"
              onClick={() => onRemoveContact(id)}
            >
              Remove
            </button>
          </li>
        ))}
    </ul>
  );
}
