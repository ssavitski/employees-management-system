import React, { useContext } from 'react';
import './StatusList.css';
import EmployeesContext from './../EmployeesContext';
import { Status } from './../index.d';

interface IProps {
  currentStatus: string;
  employeeId: string;
}

const statuses: Status[] = [
  Status.Added,
  Status.Incheck,
  Status.Approved,
  Status.Active,
  Status.Inactive,
];

// Output list of employees
const StatusList: React.FC<IProps> = ({ currentStatus, employeeId }) => {
  const { statusChange }: Employees.ContextData = useContext(EmployeesContext);

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
