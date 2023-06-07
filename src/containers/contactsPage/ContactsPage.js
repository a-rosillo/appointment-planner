import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  const [ currentName, setCurrentName ] = useState('');
  const [ currentPhone, setCurrentPhone ] = useState('');
  const [ currentEmail, setCurrentEmail ] = useState('');
  const [ duplicateName, setDuplicateName ] = useState(false);
 
  useEffect(() => {
    contacts.forEach(contact => {
      if(contact.name === currentName){
        setDuplicateName(true)
      }
    });
  }, [currentName, contacts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(duplicateName){
      alert('That name already exists.')
    } else{
      addContact(currentName, currentPhone, currentEmail)
      setCurrentName('');
      setCurrentPhone('');
      setCurrentEmail('');
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
          currentName={currentName}
          setCurrentName={setCurrentName}
          currentPhone={currentPhone}
          setCurrentPhone={setCurrentPhone}
          currentEmail={currentEmail}
          setCurrentEmail={setCurrentEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  );
};
