import React, { useEffect, useContext } from 'react';
import './EmployeesList.css';
import EmployeesItem from './EmployeesItem';
import EmployeesContext from './../EmployeesContext';

// Output list of statuses
const EmployeesList: React.FC = () => {
  const { fetchEmployees, employees }: Employees.ContextData = useContext(EmployeesContext);

  useEffect(() => {
    fetchEmployees?.();
  // eslint-disable-next-line
  }, []);

  return (
    <ul className="employees-list">
      {
        employees?.map((employee, index) => (
          <li key={employee.id} className="employees-list__item">
            <EmployeesItem item={employee} index={index} />
          </li>
        ))
      }
    </ul>
  );
};

export default EmployeesList;
