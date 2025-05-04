import React, { useState } from 'react';
import './App.css';

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const timeSlots = Array.from({ length: 14 }, (_, i) => `${8 + i}:00`);

const App = () => {
  const [selected, setSelected] = useState([]);

  const toggleSelect = (id) => {
    setSelected(prev =>
      prev.includes(id)
        ? prev.filter(slot => slot !== id)
        : prev.length < 2
          ? [...prev, id]
          : prev
    );
  };

  return (
    <div className="container">
      <img src="/sevas.png" alt="Logo" className="logo" />
      <h1 className="heading">Sevas Online Laundry Booking System</h1>

      <div className="table">
        <div className="row header">
          <div className="cell time-cell"></div>
          {weekdays.map(day => (
            <div key={day} className="cell header-cell">{day}</div>
          ))}
        </div>

        {timeSlots.map(time => (
          <div key={time} className="row">
            <div className="cell time-cell">{time}</div>
            {weekdays.map(day => {
              const id = `${day}-${time}`;
              return (
                <div key={id} className="cell machine-cell">
                  {["Washer 1", "Washer 2", "Dryer 1", "Dryer 2"].map(machine => {
                    const machineId = `${id}-${machine}`;
                    return (
                      <button
                        key={machineId}
                        className={`slot ${selected.includes(machineId) ? 'selected' : ''}`}
                        onClick={() => toggleSelect(machineId)}
                      >
                        {machine}
                      </button>
                    );
                  })}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
