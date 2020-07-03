import React from 'react';
import GlobalCard from './components/worldwideCard';
import './App.css';
import Board from './components/Board';

function App() {
  return (
    <main className="App">
      <h1 className="App__header">Covid-19 fatal cases over time</h1>
      <GlobalCard />
      <Board />
    </main>
  );
}

export default App;
