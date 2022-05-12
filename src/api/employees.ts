import instance from './instance';

type GetEmployee = () => Promise<Employees.Item[]>;
type AddEmployee = (employee: Employees.Item) => Promise<Employees.Item>;
type ChangeEmployee = (id: number, data: Employees.Item) => Promise<Employees.Item>;

// Get all employees list
export const getEmployees: GetEmployee = () =>
  instance.get('/employees')
    .then(res => res.data)
    .catch(e => {
      console.error(e);
    });

// Create employee
export const addEmployee: AddEmployee = (employee) =>
  instance.post('/employees', employee)
    .then(res => res.data)
    .catch(e => {
      console.error(e);
    });

// Change existing employee
export const changeEmployee: ChangeEmployee = (id, data) =>
  instance.patch(`/employees/${id}`, data)
    .then(res => res.data)
    .catch(e => {
      console.error(e);
    });

const employeesApi = {
  getEmployees, addEmployee, changeEmployee,
};

export default employeesApi;
