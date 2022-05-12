import EmployeesList from './components/EmployeesList';
import './App.css';

function App() {
  return (
    <section className="App">
      <header className="App-header">
        <h1>Employees management</h1>
      </header>
      <main>
        <EmployeesList items={[]} />
      </main>
    </section>
  );
}

export default App;
