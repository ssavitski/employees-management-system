import React, { useContext } from 'react';
import './StatusList.css';

import EmployeesContext from './../EmployeesContext';

const statuses: string[] = [
  'added', 'in-check', 'approved', 'active', 'inactive',
];

interface IProps {
  currentStatus: string;
  employeeId: string;
}

// Output list of employees
const StatusList: React.FC<IProps> = ({ currentStatus, employeeId }) => {
  const { statusChange } = useContext(EmployeesContext);

  return (
    <ul className="status-list">
      {
        statuses.map((status, index) => (
          <li key={index} className="status-list__item">
            <button
              onClick={() => statusChange?.(employeeId, status)}
              style={{ zIndex: statuses.length - index }}
              className={[
                'status-list__btn',
                status === currentStatus ? 'status-list__btn--active' : '',
              ].join(' ')}
            >
                {status}
            </button>
          </li>
        ))
      }
    </ul>
  );
};

export default StatusList;
