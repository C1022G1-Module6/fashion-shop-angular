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
import {HomeModule} from './component/home/home.module';
import {FooterComponent} from './component/home/footer/footer.component';
import {BodyComponent} from './component/home/body/body.component';
import {HeaderComponent} from './component/home/header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        BodyComponent,
        FooterComponent
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
        HomeModule,
        NotificationModule,
        ProductModule,
        HttpClientModule,
        AngularFireStorageModule,
        AngularFireModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
    ],
    providers: [],
    exports: [
        HeaderComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
