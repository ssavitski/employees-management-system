import React from 'react';
import './EmployeesList.css';
interface Props {
  items: Employees.Item[];
}

// Output list of employees
const EmployeesList: React.FC<Props> = ({ items }) => {
  return (
    <ul className="employees-list">
      {
        items.map(({ id, name, email }, index) => (
          <li key={id} className="employees-list__item">
            <mark>{index + 1}</mark>: <strong>{name}</strong>&nbsp;
            <em>(<a href={`mailto:${email}`} rel="noreferrer" target="_blank">{email}</a>)</em>
          </li>
        ))
      }
    </ul>
  );
};

export default EmployeesList;
