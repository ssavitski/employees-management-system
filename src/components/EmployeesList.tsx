import React from 'react';
interface Props {
  items: Employees.Item[];
}

// Output list of employees
const EmployeesList: React.FC<Props> = ({ items }) => {
  return (
    <ul>
      {
        items.map(({ id, name, email }, index) => (
          <li key={id}>
            {index + 1}: {name} ({email})
          </li>
        ))
      }
    </ul>
  );
};

export default EmployeesList;
