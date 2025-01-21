import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService, private snack: MatSnackBar) {}
  
  public user={
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
  };

  ngOnInit(): void {}

  formSubmit(){
   // alert('Form Submitted Successfully!!');
    console.log(this.user);
    //error for Username
    if(this.user.username=='' || this.user.username==null){
      //alert('User is Required!!')
      this.snack.open('Username is required !!', ' ' ,{
        duration: 3000,
        // verticalPosition: 'top',
        // horizontalPosition: 'right',
      });
      return;
    }
    //error for Password
     if(this.user.password=='' || this.user.password==null){
        this.snack.open('Password is required !!', ' ' ,{
          duration: 3000,
        });
      return;
    }
    //error for FName and LName
  if(this.user.firstname=='' || this.user.firstname==null || this.user.lastname=='' || this.user.lastname==null){
    this.snack.open('Firstname and Lastname is required !!', ' ' ,{
      duration: 3000,
    });
  return;
}
   //error for Email
if(this.user.email=='' || this.user.email==null){
  this.snack.open('Email is required !!', ' ' ,{
    duration: 3000,
  });
return;
}
//error for Phone
if(this.user.phone=='' || this.user.phone==null){
  this.snack.open('Phone no is required !!', ' ' ,{
    duration: 3000,
  });
return;
}

    //adduser: userservice
    this.userService.addUser(this.user).subscribe(
      (data: any)=>{
        //function call for Success
        console.log(data)
        // alert('Success!!');
        Swal.fire('Successfully done !!','Registered User id is ' +data.id,'success');

      },
      (error)=>{
        //function call for Error
        console.log(error)
        //alert('Something Went Wrong');
        this.snack.open('Something went wrong !!' , '' ,
        {
          duration: 3000,
        });
      }
    )
  }

}
