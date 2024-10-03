// import Contact from "../Contact/Contact";
// import styles from "./ContactList.module.css";

// export default function ContactList({
//   contacts,
//   handleDeleteContacts,
//   handleAddContacts,
// }) {
//   return (
//     <ul className={styles.contactList}>
//       {contacts.map((contact) => (
//         <li key={contact.id}>
//           <Contact
//             contact={contact}
//             handleDeleteContacts={handleDeleteContacts}
//             handleAddContacts={handleAddContacts}
//           />
//         </li>
//       ))}
//     </ul>
//   );
// }
// import Contact from "../Contact/Contact";
// import styles from "./ContactList.module.css";
// import { useEffect, useState } from "react";

// export default function ContactList() {
//   const handleAddContacts = () => {};

//   const handleDeleteContacts = () => {};

//   const filtredContacts = contacts.filter((contact) => {
//     return (
//       contact.name &&
//       contact.name.toLowerCase().includes(searchValue.toLowerCase())
//     );
//   });

//   const [contacts, setContacts] = useState(() => {
//     const savedContacts = localStorage.getItem("contacts");
//     return savedContacts ? JSON.parse(savedContacts) : InContacts;
//   });
//   const [searchValue, setSearchValue] = useState("");

//   useEffect(() => {
//     localStorage.setItem("contacts", JSON.stringify(contacts));
//   }, [contacts]);

//   return (
//     <ul className={styles.contactList}>
//       {contacts.map((contact) => (
//         <li key={contact.id}>
//           <Contact
//             contact={contact}
//             handleDeleteContacts={handleDeleteContacts}
//             handleAddContacts={handleAddContacts}
//             filtredContacts={filtredContacts}
//           />
//         </li>
//       ))}
//     </ul>
//   );
// }

import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import { useEffect, useState } from "react";

export default function ContactList() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : []; // Змінюємо на порожній масив або інші початкові контакти
  });

  const [searchValue, setSearchValue] = useState("");

  // Реалізація додавання контакту

  // Реалізація видалення контакту
  const handleDeleteContacts = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const filteredContacts = contacts.filter((contact) => {
    return (
      contact.name &&
      contact.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <ul className={styles.contactList}>
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            <Contact
              contact={contact}
              handleDeleteContacts={handleDeleteContacts}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
