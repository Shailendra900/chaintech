import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { person } from '../datatypes';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent  implements OnInit{
  allperson:person[]|undefined;
  constructor(private apiService:ApiService){}

  ngOnInit(): void {
    this.getData();
    
  }
  getData() {
    this.apiService.getPerson().subscribe((result)=>{
      this.allperson=result;
    })
  }


}
