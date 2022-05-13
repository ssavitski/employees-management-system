import React, { useCallback } from 'react';
import './EmployeesList.css';
import StatusList from './StatusList';
import { changeEmployee } from './../api/employees';

interface IProps {
  items: Employees.Item[];
  setItems: (items: Employees.Item[]) => void;
}

// Output list of statuses
const EmployeesList: React.FC<IProps> = ({ items, setItems }) => {
  const statusChange = useCallback((id: string, status: string): void => {
    async function changeData() {
      const updatedItem = await changeEmployee(id, { status });
      const itemsCopy = [ ...items ];
      const index = itemsCopy.findIndex(({ id: itemId }) => itemId === id);

      if (index !== -1) {
        itemsCopy[index] = updatedItem;
        setItems(itemsCopy);
      }
    }

    changeData();
  }, [items, setItems]);

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
