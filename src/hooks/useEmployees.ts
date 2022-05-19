import { useCallback, useState } from 'react';
import { changeEmployee, getEmployees } from './../api/employees';

type UseEmployees = () => Employees.ContextData;

const useEmployees: UseEmployees = () => {
  const [items, setItems] = useState<Employees.Item[]>([]);

  const fetchItems: Employees.FetchEmployees = async () => {
    const employees: Employees.Item[] = await getEmployees();
    setItems(employees);
  }

  const statusChange: Employees.StatusChange = useCallback((id, status) => {
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
