import React from 'react';

import StatusList from './StatusList';

interface IProps {
  item: Employees.Item;
  index: number;
}

// Output list of statuses
const EmployeesItem: React.FC<IProps> = ({ item: { id, name, email, status }, index }) => {
  const EmployeeLink = () => <a href={`mailto:${email}`} rel="noreferrer" target="_blank">{email}</a>;

  return (
    <>
      <mark>{index + 1}</mark>: <strong>{name}</strong>&nbsp;
      <em>(<EmployeeLink />)</em>
      <StatusList currentStatus={status} employeeId={id} />
    </>
  );
};

export default EmployeesItem;
