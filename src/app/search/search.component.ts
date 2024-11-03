import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { person } from '../datatypes';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResult:person[]|undefined;
  searchMessage:string|undefined;

  constructor(private apiService:ApiService,private activeRoute:ActivatedRoute, private router:Router){}


  ngOnInit(): void {
    let query = this.activeRoute.snapshot.paramMap.get('query');
  
    query && this.apiService.searchList(query).subscribe(
      (result) => {
        if (result.length > 0) {
          this.searchResult = result;  
        } else {
          this.searchMessage = "No Result Match";  
          setTimeout(() => {
            this.router.navigate(['']);  
          }, 3000);
        }
      },
      (error) => {
        this.searchMessage = "An error occurred. Please try again.";  
        setTimeout(() => {
          this.router.navigate(['']);  
        }, 3000);
      }
    );
  }
}