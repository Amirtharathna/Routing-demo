import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { Department } from './department.model';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
department:Department[]=[
  {"id":1, "name":"Angular"},
  {"id":2,"name":"Node"}, 
  {"id":3,"name":"MongoDB"},
   {"id":4,"name":"Ruby"},
   {"id":5,"name":"Bootstrap"},
  
]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
onSelect(dep:Department){
  this.router.navigate(['/department',dep.id]);
}
}
