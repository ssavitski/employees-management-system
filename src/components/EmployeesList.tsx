import React, { useCallback } from 'react';
import './EmployeesList.css';
import StatusList from './StatusList';
import { changeEmployee } from './../api/employees';

interface IProps {
  items: Employees.Item[];
}

// Output list of statuses
const EmployeesList: React.FC<IProps> = ({ items }) => {
  const statusChange = useCallback((id: string, status: string): void => {
    async function changeData() {
      await changeEmployee(id, { status });
    }

    changeData();
  }, []);

  return (
    <ul className="employees-list">
      {
        items.map(({ id, name, email, status }, index) => (
          <li key={id} className="employees-list__item">
            <mark>{index + 1}</mark>: <strong>{name}</strong>&nbsp;
            <em>(<a href={`mailto:${email}`} rel="noreferrer" target="_blank">{email}</a>)</em>
            <StatusList statusChange={(status) => statusChange(id, status)} currentStatus={status} />
          </li>
        ))
      }
    </ul>
  );
};

export default EmployeesList;
