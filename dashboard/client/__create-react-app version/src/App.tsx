import React from 'react';
import logo from './logo.svg';
import './App.css';
import { KnobTest } from './components/KnobTest';

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '2rem'}}>
      <KnobTest />
      <KnobTest />
      <KnobTest />
      <KnobTest />

    </div>
  );
}

export default App;
