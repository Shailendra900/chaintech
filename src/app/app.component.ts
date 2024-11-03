import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from './service/api.service';
import { person } from './datatypes';
import { ActivatedRoute, Router } from '@angular/router';
import { __values } from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  SearchMessge:string|undefined ;
  constructor( private route:Router) {}

  ngOnInit(): void {   
  
  }
  submitSearch(val:string){
    this.route.navigate([`search/${val}`]);
    if(!val){
      this.SearchMessge="Please Enter Value";
    }
    setTimeout(() => {
      this.SearchMessge=undefined;
      
    }, 2000);
  }
  

  



}