import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreateNewsComponent} from './create-news/create-news.component';
import {ListNewsComponent} from './list-news/list-news.component';
import {DisplayComponent} from './display/display.component';


const routes: Routes = [
  {path: 'createNews', component: CreateNewsComponent},
  {path: 'listNews', component: ListNewsComponent},
  {path: 'detailNews/:id', component: DisplayComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule {
}
