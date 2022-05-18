import React, { useContext } from 'react';
import './StatusList.css';
import EmployeesContext from './../EmployeesContext';

interface IProps {
  currentStatus: string;
  employeeId: string;
}

const statuses: string[] = [
  'added', 'in-check', 'approved', 'active', 'inactive',
];

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
