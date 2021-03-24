
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService} from '../user.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: any[] = [];
  users1: any[] = [];
  displayedColumns: string[] = ['id', 'first_name', 'email', 'last_name', 'actions'];
  dataSource : any;
  length: any;
  pageSize: any;

  pageEvent: PageEvent
  actionId: any;
  firstName: any;
  lastName: any;
  email: any;

  constructor(private ActivatedRoute: ActivatedRoute, private UserService: UserService, private router: Router) { }

  ngOnInit(): void {
    // this.ActivatedRoute.paramMap.subscribe(pm => {
    //   if(!pm.has('page')){
    //     return;
    //   }else{
    //     const pg =pm.get('page');
        this.loadUsers();
    //   }
    // })


  }

  onPaginateChange(event: PageEvent){
    let pageIn = event.pageIndex;
    let size = event.pageSize;
    pageIn = pageIn + 1;

    this.UserService.getPageUser(pageIn).subscribe(pagedata => {
      this.users =  [];
      this.users1  = [];
      this.users.push(pagedata);
      console.log(this.users);
      for(let i=0; i<this.users[0].data.length; i++){
      this.users1.push(this.users[0].data[i]);
    }

    this.dataSource = this.users1;
    console.log(this.users1);
    // console.log(this.users[0].total);
    // this.length = this.users[0].total;
    // this.pageSize = this.users[0].per_page;
    });

  }

  // EditClick(id, firstName, lastName, email){
  // 	this.actionId = id;
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  //   this.email = email;
  //   console.log(this.actionId);
  //   console.log(this.email);

  // }

  DeleteClick(id: any){
    this.actionId = id;

    console.log(this.actionId);

      if(confirm('Are you Sure?')){
        this.UserService.deleteUser(this.actionId).subscribe(d => {
          console.log(d);
          this.reload();
        });

      }
  }

  reload() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./'], { relativeTo: this.ActivatedRoute });
  }

  loadUsers(){
    this.UserService.getPageUser(1).subscribe(pagedata => {
      this.users =  [];
      this.users1  = [];
      this.users.push(pagedata);
     console.log(this.users);
     for(let i=0; i<this.users[0].data.length; i++){
      this.users1.push(this.users[0].data[i]);
    }

    this.dataSource = this.users1;
    console.log(this.users1);
    console.log(this.users[0].total);
    this.length = this.users[0].total;
    this.pageSize = this.users[0].per_page;
    });
  }


}
