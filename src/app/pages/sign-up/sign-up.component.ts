import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{

  ngOnInit() { 
  }

  constructor(private userService:UserService){}

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
      alert('User added successfully!');
    },
    (error) => {
      alert('Error adding user!');
      console.log(error);
    }
   )
  }
}
