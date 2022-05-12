import React from 'react';
interface Props {
  items: Employees.Item[];
}

// Output list of employees
const EmployeesList: React.FC<Props> = ({ items }) => {
  return (
    <ul>
      {
        items.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))
      }
    </ul>
  );
};

export default EmployeesList;
