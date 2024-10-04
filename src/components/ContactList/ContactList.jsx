import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import { useEffect, useState } from "react";
import { selectContacts } from "../../redux/contactsSlise";

export default function ContactList() {
  const contacts = useSelector(selectContacts);

  // const filteredContacts = contacts.filter((contact) => {
  //   return (
  //     contact.name &&
  //     contact.name.toLowerCase().includes(searchValue.toLowerCase())
  //   );
  // });

  return (
    <div>
      <ul className={styles.contactList}>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
}
