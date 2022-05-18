import React, { createContext, ReactNode } from 'react';

import useEmployees from './hooks/useEmployees';

interface IProps {
  children: ReactNode;
}

const EmployeesContext = createContext<Employees.ContextData>({});

export const EmployeesContextProvider: React.FC<IProps> = ({ children }) => {
  return (
    <EmployeesContext.Provider value={useEmployees()}>
      {children}
    </EmployeesContext.Provider>
  )
};

export default EmployeesContext;