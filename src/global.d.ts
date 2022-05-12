declare namespace Employees {

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

  type Status = 'added' | 'active' | 'inactive' | 'in-check' | 'approved';
}
