import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ contacts, appointments, addAppointment }) => {
  
  const [ currentName, setCurrentName ] = useState("")
  const [ currentContact, setCurrentContact ] = useState("")
  const [ currentDate, setCurrentDate ] = useState("")
  const [ currentTime, setCurrentTime ] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(currentName, currentContact, currentDate, currentTime)
    setCurrentName("")
    setCurrentContact("")
    setCurrentDate("")
    setCurrentTime("")
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          handleSubmit={handleSubmit} 
          currentName={currentName}
          setCurrentName={setCurrentName}
          currentContact={currentContact}
          setCurrentContact={setCurrentContact}
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          contacts={contacts}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList entries={appointments} />
      </section>
    </div>
  );
};