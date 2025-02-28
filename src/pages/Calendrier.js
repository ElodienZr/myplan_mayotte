import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calendrier = () => {
  const [events, setEvents] = useState([
    { title: "Autocad", start: new Date(), backgroundColor: "#0073b7", borderColor: "#0073b7" },
  ]);
  
  const [newEventTitle, setNewEventTitle] = useState("");

  const handleAddEvent = () => {
    if (!newEventTitle) return;

    setEvents([
      ...events,
      {
        title: newEventTitle,
        start: new Date(), // Ajoute l'événement avec la date actuelle
        backgroundColor: "#3c8dbc",
        borderColor: "#3c8dbc",
      },
    ]);

    setNewEventTitle(""); // Reset l'input après ajout
  };

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Calendrier</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            {/* Colonne des événements */}
            <div className="col-md-3">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Créer un événement</h4>
                </div>
                <div className="card-body">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nom de l'événement"
                    value={newEventTitle}
                    onChange={(e) => setNewEventTitle(e.target.value)}
                  />
                  <button className="btn btn-primary mt-2" onClick={handleAddEvent}>
                    Ajouter
                  </button>
                </div>
              </div>
            </div>

            {/* Colonne du calendrier */}
            <div className="col-md-9">
              <div className="card card-primary">
                <div className="card-body p-0">
                  <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    editable={true}
                    droppable={true}
                    events={events}
                    eventReceive={(eventInfo) => {
                      setEvents([...events, { title: eventInfo.event.title, start: eventInfo.event.start }]);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calendrier;
