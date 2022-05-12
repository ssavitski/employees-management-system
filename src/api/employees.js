import instance from './instance';

// Get all employees list
export const getEmployees = () => {
  instance.get('/employees').then(res => {
    return res.data;
  }).catch(e => {
    console.error(e);
  });
};

// Create employee
export const addEmployee = (employee) => {
  instance.post('/employees', employee).then(res => {
    return res.data;
  }).catch(e => {
    console.error(e);
  });
};

// Change existing employee
export const changeEmployee = (id, data) => {
  instance.patch(`/employees/${id}`, data).then(res => {
    return res.data;
  }).catch(e => {
    console.error(e);
  });
};

const employeesApi = {
  getEmployees, addEmployee, changeEmployee,
};

export default employeesApi;
