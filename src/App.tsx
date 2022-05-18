import React from 'react';

import EmployeesList from './components/EmployeesList';
import './App.css';

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
