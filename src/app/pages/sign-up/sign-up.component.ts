import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{

  ngOnInit() { 
  }

  constructor(private userService:UserService, private _snack: MatSnackBar){}

  // user !: User;

  user: User = {
    userName:'',
    password:'',
    firstName:'',
    lastName: '',
    email: '',
    phone: ''
  };


  registeringUser(){
   this.userService.addUser(this.user).subscribe(
    (data) => {
      // Simple Alert...
      // alert('User added successfully!');

      // Using snack, which is like small popup...
      // this._snack.open("User added successfully!!!", "", {
      //   duration:3000
      // });

      // Using Swal, check it Out...
      Swal.fire("Success", "Registration Successfull", "success");
      return;
    },
    (error) => {
      // alert('Error adding user!');
      // this._snack.open("Error in Registration", "", {
      //   duration:3000,
      // });
      Swal.fire("Error", "Invalid Data Entry", "error");
      
      console.log(error);
    }
   )
  }
}
