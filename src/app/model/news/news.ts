import {Employee} from '../employee/employee';

export interface News {
  id?: number;
  content?: string;
  img?: string;
  nameImg: string;
  title?: string;
  employee?: Employee;
}
