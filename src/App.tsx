import React from 'react';
import './App.css';
import EmployeesList from './components/EmployeesList';

function App() {
  return (
    <section className="app">
      <header className="app-header">
        <h1>Employees management</h1>
      </header>
      <main>
        <EmployeesList />
      </main>
      <footer className="app-footer">
        &copy; Copyright 2022, Workmotion incorporated. All rights reserved
      </footer>
    </section>
  );
}

export default App;
