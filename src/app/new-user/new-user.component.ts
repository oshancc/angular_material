import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl(),
    job: new FormControl()
  });


  constructor(private UserService: UserService) { }

  ngOnInit(): void {
  }

  submitForm(){
    this.UserService.postUser(this.userForm.value).subscribe(p => {
      console.log(p);
    });
  }


}
