import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";
import { selectContacts } from "../../redux/contactsSlice";

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const getFilterContacts = (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilterContacts(contacts, filter);

  return (
    <ul className={css.list}>
      {contacts.length === 0 && <p>There are no contacts!</p>}
      {filteredContacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
};
