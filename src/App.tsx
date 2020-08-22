import React from 'react';
import './App.css';
import IssTracker from "./tracker/iss-tracker";

const App = () => (
    <div className="App">
      <header className="App-header">
        <p>
          ISS Tracker
        </p>
      </header>
      <IssTracker/>
    </div>
);

export default App;
