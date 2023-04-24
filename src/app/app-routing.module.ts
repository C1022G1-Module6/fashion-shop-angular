import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {
    path: 'customer',
    loadChildren: () => import('./component/customer/customer.module').then(module => module.CustomerModule)
  },
  {
    path: 'data-entry',
    loadChildren: () => import('./component/data-entry/data-entry.module').then(module => module.DataEntryModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./component/employee/employee.module').then(module => module.EmployeeModule)
  },
  {
    path: 'invoice',
    loadChildren: () => import('./component/invoice/invoice.module').then(module => module.InvoiceModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./component/news/news.module').then(module => module.NewsModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./component/notification/notification.module').then(module => module.NotificationModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./component/product/product.module').then(module => module.ProductModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
