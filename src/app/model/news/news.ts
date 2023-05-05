import {Employee} from '../employee/employee';

export interface News {
  id?: number;
  content?: string;
  img?: string;
  nameImg: string;
  mb?:number;
  title?: string;
  employee?: Employee;

}
