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
    <section className="App">
      <header className="App-header">
        <h1>Employees management</h1>
      </header>
      <main>
        <EmployeesList items={items} />
      </main>
    </section>
  );
}

export default App;
