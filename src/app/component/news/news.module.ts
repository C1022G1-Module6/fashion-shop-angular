import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { CreateNewsComponent } from './create-news/create-news.component';
import { ListNewsComponent } from './list-news/list-news.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CKEditorModule} from 'ckeditor4-angular';
import { DisplayComponent } from './display/display.component';


@NgModule({
  declarations: [CreateNewsComponent, ListNewsComponent, DisplayComponent],
    imports: [
        CommonModule,
        NewsRoutingModule,
        FormsModule,
        CKEditorModule,
        ReactiveFormsModule
    ]
})
export class NewsModule { }
