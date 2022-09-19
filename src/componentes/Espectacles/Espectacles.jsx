import React from 'react'
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker, {registerLocale} from 'react-datepicker';
import { useState } from 'react';
import '../Espectacles/espectacles.css'
import { es } from 'date-fns/locale';
registerLocale("es", es)

export const Espectacles = ({user}) => {

  const locales = {
    "en-US": require("date-fns/locale/en-US"),
    };
  const localizer = dateFnsLocalizer({
      format,
      parse,
      startOfWeek,
      getDay,
      locales,
    });

  const events = [
      {
          title: "Correfoc Horta",
          allDay: true,
          start: new Date(2022, 8, 17),
          end: new Date(2022, 8, 17),
      },

  ];
  
      const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
      const [allEvents, setAllEvents] = useState(events);

      function handleAddEvent() {
          setAllEvents([...allEvents, newEvent]);
      }

  return (
    <div className='container-contacte '>
      <div className='div-container'>
        <h1 className='titol-seccio'>Actuacions</h1>             
        <Calendar className='big-calendar 'locale="es" localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500 }} />
        
        { user ?<>
        <h2>Afegir event</h2>
        <div className='calendar'>
            <input type="text" placeholder="Titol"  value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
           <p>Inici:</p> <input placeholder="DD-MM-YYYY" locale="es" selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
           <p>Fi:</p><input placeholder="DD-MM-YYYY" locale="es" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
            <button  className='button-login' onClick={handleAddEvent}>
               Afegir
            </button>
        </div> </>  : null}
                    
      </div>
    </div>
  );
}