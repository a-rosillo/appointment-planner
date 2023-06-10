import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker"

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  handleSubmit,
  currentName,
  setCurrentName,
  currentDate,
  setCurrentDate,
  currentTime,
  setCurrentTime,
}) => {

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" type="text" value={currentName} onChange={e => setCurrentName(e.target.value)} />
        <input placeholder="Date" type="date" min={getTodayString()} value={currentDate} onChange={e => setCurrentDate(e.target.value)} />
        <input placeholder="Time" type="time" value={currentTime} onChange={e => setCurrentTime(e.target.value)} />
        <ContactPicker contacts={contacts}/>
        <input type="submit"/>
      </form>
    </>
  );
};
