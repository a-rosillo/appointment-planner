import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [ contacts, setContacts ] = useState([]);
  const [ appointments, setAppointments ] = useState([]);

  const addContact = (name, phone, email) => {
    const contact = {
      name: name,
      phone: phone,
      email: email
    }
    setContacts((prev) => [...prev, contact])
  }

  const addAppointment = (name, contact, date, time) => {
    const appointment = {
      name: name,
      contact: contact,
      date: date,
      time: time
    }
    setAppointments((prev) => [...prev, appointment])
  }

  /*
  Implement functions to add data to
  contacts and appointments
  */

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} addContact={addContact}/> }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage contacts={contacts} appointments={appointments} addAppointment={addAppointment}/> }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
