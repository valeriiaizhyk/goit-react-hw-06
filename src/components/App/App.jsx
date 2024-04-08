
import { ContactForm } from "../ContactForm/ContactForm";
import { ContactList } from "../ContactList/ContactList";
import { SearchBox } from "../SearchBox/SearchBox";

export default function App () {
  // const [search, setSearch] = useState(" ");
  // const [contacts, setContacts] = useState(() => {
  //   const contactValues = localStorage.getItem("saved-contacts");
  //   if (contactValues !== null) {
  //     return JSON.parse(contactValues);
  //   }
  //   return arraycontacts;
  // });

  // useEffect(() => {
  //   window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = (newContact) => {
  //   setContacts((prevContact) => {
  //     return [...prevContact, newContact];
  //   });
  // };

  // const deleteContact = (id) => {
  //   setContacts((prevContact) =>
  //     prevContact.filter((contact) => contact.id !== id)
  //   );
  // };

  // const visibleContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(search.toLowerCase())
  // );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox  />
      <ContactList  />
    </>
  );
}
