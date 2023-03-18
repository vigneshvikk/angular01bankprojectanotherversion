import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  data1 = "Your Perfect Banking Partner" //   DB(1) databinding-----string interpolation //we stote data directly so it no need to define declaration
data2="Enter A/C number"  //DB(2) propertybinding

acno:any
psw:any



  // userDetails:any={
  //   1000:{username:"anu",acno:1000,password:"abc123",balance:0},
  //   1001:{username:"amal",acno:1001,password:"abc123",balance:0},
  //   1002:{username:"arun",acno:1002,password:"abc123",balance:0},
  //   1003:{username:"mega",acno:1003,password:"abc123",balance:0}
  // }
  constructor(private router:Router,private ds:DataService){}

  ngOnInit():void {

  }

 login(){
  var acnum=this.acno
  var psw=this.psw
const result=this.ds.login(acnum,psw)

if(result){
  alert(' login success')

  this.router.navigateByUrl("dashboard")
}else{
  alert('incurect account or password' )
}
 





  }
}
