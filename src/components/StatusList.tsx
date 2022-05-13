import React from 'react';
import './StatusList.css';

const statuses: string[] = [
  'added', 'active', 'inactive', 'in-check', 'approved',
];

interface IProps {
  statusChange: (status: string) => void;
  currentStatus: string;
}

// Output list of employees
const StatusList: React.FC<IProps> = ({ statusChange, currentStatus }) => {
  return (
    <ul className="status-list">
      {
        statuses.map((status, index) => (
          <li key={index} className="status-list__item">
            <button
              onClick={() => statusChange(status)}
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
