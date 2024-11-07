import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { PersonListComponent } from './person-list/person-list.component';
import { DetailsPersonComponent } from './details-person/details-person.component';

const routes: Routes = [
  { path: 'search/:query', 
    children:[
      {path:'',component:SearchComponent},
      {path:"details/:pid",component:DetailsPersonComponent}
    ]
  },
  {path:'',component:PersonListComponent},
  {path:'details/:pid',component:DetailsPersonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
