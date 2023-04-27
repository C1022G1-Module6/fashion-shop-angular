import {ProductType} from './product-type';

export interface Product {
  id?: number;
  code?: string;
  entryPrice?: number;
  img?: string;
  name?: string;
  qrImg?: string;
  quantity?: number;
  sellingPrice?: number;
  productType?: ProductType;
}
