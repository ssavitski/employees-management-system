declare namespace Employees {

  interface Location {
    lat: number;
    long: number;
  }
  interface Item {
    id: string;
    email?: string;
    name: string;
    status: 'added' | 'active' | 'inactive' | 'in-check' | 'approved';
  }

  interface ContextData {
    statusChange?: (id: string, status: string) => void;
    fetchEmployees?: () => Promise<void>;
    employees?: Item[];
  }
}
