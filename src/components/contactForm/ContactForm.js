import React from "react";

export const ContactForm = ({
  currentName,
  setCurrentName,
  currentPhone,
  setCurrentPhone,
  currentEmail,
  setCurrentEmail,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit={handleSubmit} >
        <input type='text' placeholder='Name' value={currentName} onChange={e => setCurrentName(e.target.value)} />
        <input type='tel' placeholder='Phone' pattern='^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$' value={currentPhone} onChange={e => setCurrentPhone(e.target.value)} />
        <input type='email' placeholder='Email' value={currentEmail} onChange={e => setCurrentEmail(e.target.value)} />
        <input type='submit' />
      </form>
    </>
  );
};