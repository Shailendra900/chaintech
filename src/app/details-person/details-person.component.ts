import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';
import { person } from '../datatypes';

@Component({
  selector: 'app-details-person',
  templateUrl: './details-person.component.html',
  styleUrls: ['./details-person.component.css']
})
export class DetailsPersonComponent implements OnInit {
  getdetails:person|undefined;
  constructor(private apiService:ApiService, private activeRoute:ActivatedRoute){}
  ngOnInit(): void {
    let pid = this.activeRoute.snapshot.paramMap.get('pid');
    if (pid) {
     pid && this.apiService.detailsPerson(pid).subscribe((result) => {
        console.warn(result);
        this.getdetails = result;
      });
    }
    }
    
  }

