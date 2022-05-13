import { useEffect, useState } from 'react';

import EmployeesList from './components/EmployeesList';
import { getEmployees } from './api/employees';
import './App.css';

function App() {
  const [items, setItems] = useState<Employees.Item[]>([]);

  useEffect(() => {
    async function fetchItems() {
      const employees: Employees.Item[] = await getEmployees();
      setItems(employees);
    }

    fetchItems();
  }, []);

  return (
    <section className="app">
      <header className="app-header">
        <h1>Employees management</h1>
      </header>
      <main>
        <EmployeesList items={items} setItems={setItems} />
      </main>
      <footer className="app-footer">
        &copy; Copyright 2022, Workmotion incorporated. All rights reserved
      </footer>
    </section>
  );
}

export default App;
