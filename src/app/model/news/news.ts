import {Employee} from '../employee/employee';

export interface News {
  id?: number;
  content?: string;
  img?: string;
  title?: string;
  employee?: Employee;
}
