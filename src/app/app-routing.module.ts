import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { PersonListComponent } from './person-list/person-list.component';

const routes: Routes = [
  { path: 'search/:query', component:SearchComponent},
  {path:'',component:PersonListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
