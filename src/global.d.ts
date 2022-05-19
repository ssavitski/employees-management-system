declare namespace Employees {
  import { Status } from './index.d';

  interface Location {
    lat: number;
    long: number;
  }

  interface Item {
    id: string;
    email?: string;
    name: string;
    status: Status;
  }

  type StatusChange = (id: string, status: Status) => void;

  type FetchEmployees = () => Promise<void>;

  interface ContextData {
    statusChange?: StatusChange;
    fetchEmployees?: FetchEmployees;
    employees?: Item[];
  }
}
