import {CustomerType} from './customer-type';

export interface Customer {
  id?: number;
  address?: string;
  code?: string;
  dateOfBirth?: string;
  email?: string;
  gender?: boolean;
  phoneNumber?: string;
  point?: string;
  customerType?: CustomerType;
}
