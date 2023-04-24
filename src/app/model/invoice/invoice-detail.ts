import {Invoice} from './invoice';
import {Product} from '../product/product';

export interface InvoiceDetail {
  id?: number;
  quantity?: number;
  total?: number;
  invoice?: Invoice;
  product?: Product;
}
