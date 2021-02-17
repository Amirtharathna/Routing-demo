import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router,ParamMap} from '@angular/router';

@Component({
  selector: 'app-departemnt-detail',
  templateUrl: './departemnt-detail.component.html',
  styleUrls: ['./departemnt-detail.component.css']
})
export class DepartemntDetailComponent implements OnInit {
public departmentId:any;

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    //let id=this.route.snapshot.paramMap.get('id');
   // this.departmentId=id;
   this.route.paramMap.subscribe((params : ParamMap)=>{
let id = params.get('id');
this.departmentId=id;
   });
  }
goPrevious(){
  let previousId=this.departmentId - 1;
  this.router.navigate(['/department',previousId]);
}

goNext(){
  let nextId=this.departmentId + 1;
  this.router.navigate(['/department',nextId]);
}
showOverview(){
  this.router.navigate(['overview'],{relativeTo:this.route});
}
showContact(){
  this.router.navigate(['contact'],{relativeTo:this.route});
}
}
