import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService} from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl(),
    job: new FormControl()
  });

userId: any
// singleUserArray: any[] = [];
// singleUser: any;
// firstName: any = "";
// lastName: any = "";
// email: any = "";


  constructor(private ActivatedRoute: ActivatedRoute, private UserService: UserService) { }

  ngOnInit(): void {

      // this.ActivatedRoute.paramMap.subscribe(pm => {
      //   if(!pm.has('id')){
      //     return;
      //   }else{
      //     const userId =pm.get('id');
      //     this.UserService.getSingleUser(userId).subscribe(usr => {
      //       this.singleUserArray.push(usr);
      //       this.singleUser = this.singleUserArray[0].data;
      //       console.log(this.singleUser.first_name);

      //       this.firstName = this.singleUser.first_name;
      //       this.lastName = this.singleUser.last_name;
      //       this.email = this.singleUser.email;
      //     });
      //   }
      // })

         this.ActivatedRoute.paramMap.subscribe(pm => {
        if(!pm.has('id')){
          return;
        }else{
          const userId =pm.get('id');
          this.userId = userId;
        }
      })


  }

  submitForm(){
    this.UserService.editUser(this.userId,this.userForm.value).subscribe(p => {
      console.log(p);
    });
  }





}
