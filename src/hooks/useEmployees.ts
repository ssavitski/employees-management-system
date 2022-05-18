import { useCallback, useState } from 'react';

import { changeEmployee, getEmployees } from './../api/employees';

const useEmployees: () => Employees.ContextData = (): Employees.ContextData => {
  const [items, setItems] = useState<Employees.Item[]>([]);

  async function fetchItems() {
    const employees: Employees.Item[] = await getEmployees();
    setItems(employees);
  }

  const statusChange = useCallback((id: string, status: string): void => {
    async function changeData() {
      const updatedItem = await changeEmployee(id, { status });

      setItems(prevItems => {
        const itemsCopy = [ ...prevItems ];
        const index = itemsCopy.findIndex(({ id: itemId }) => itemId === id);

        if (index !== -1) {
          itemsCopy[index] = updatedItem;
        }

        return [ ...itemsCopy ];
      });
    }

    changeData();
  // eslint-disable-next-line
  }, []);

  return { statusChange, fetchEmployees: fetchItems, employees: items };
}

export default useEmployees;
