import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CustomerModule} from './component/customer/customer.module';
import {DataEntryModule} from './component/data-entry/data-entry.module';
import {EmployeeModule} from './component/employee/employee.module';
import {InvoiceModule} from './component/invoice/invoice.module';
import {NewsModule} from './component/news/news.module';
import {NotificationModule} from './component/notification/notification.module';
import {ProductModule} from './component/product/product.module';
import {CKEditorModule} from 'ckeditor4-angular';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,
    CustomerModule,
    DataEntryModule,
    EmployeeModule,
    InvoiceModule,
    NewsModule,
    NotificationModule,
    ProductModule,
    HttpClientModule,
    AngularFireStorageModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
