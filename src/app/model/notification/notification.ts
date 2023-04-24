import {Employee} from '../employee/employee';

export interface Notification {
  id?: number;
  content?: string;
  img?: string;
  tittle?: string;
  employee?: Employee;
}
