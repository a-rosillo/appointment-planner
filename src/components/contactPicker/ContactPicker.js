import React from "react";

export const ContactPicker = ({ contacts, handleChange, value, name }) => {
  return (
    <>
      <select onChange={handleChange} value={value} name={name} >
        <option value="" >No Content Selected</option>
        {contacts.map((contact, index) => {
          return(<option key={index} value={contact.name} >{contact.name}</option>)
        })}
      </select>
    </>
  );
};
