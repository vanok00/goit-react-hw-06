import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

export default function ContactList({
  contacts,
  handleDeleteContacts,
  handleAddContacts,
}) {
  return (
    <ul className={styles.contactList}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            contact={contact}
            handleDeleteContacts={handleDeleteContacts}
            handleAddContacts={handleAddContacts}
          />
        </li>
      ))}
    </ul>
  );
}
