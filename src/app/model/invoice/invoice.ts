import {Customer} from '../customer/customer';

export interface Invoice {
  id?: number;
  bonusPoint?: number;
  code?: string;
  date?: string;
  employeeName: string;
  payment: number;
  total?: number;
  customer?: Customer;
}
