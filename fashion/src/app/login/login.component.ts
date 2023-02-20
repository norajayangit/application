import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
productdata:any;

  loginForm!: FormGroup;

  constructor(private formBuilder:FormBuilder, private http:HttpClient,private router:Router) { }

 


  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:[''],
      password:['']
    })

}

login()
{

  this.http.get<any>( "http://localhost:4000/SignupUsers")
  .subscribe((res)=>{
    
    const user= res.find((a:any)=>{
      return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
    });

    if(user){
      
      alert("Login Success!!");

      this.loginForm.reset();
      this.router.navigate(['products']);
      
    }
    else{
      alert("User Not Found!!")
    }
   

  })

}




}