import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  //data1 = "Your Perfect Banking Partner" //   DB(1) databinding-----string interpolation //we stote data directly so it no need to define declaration
data2="Enter A/C number"  //DB(2) propertybinding





  userDetails:any={
    1000:{username:"anu",acno:1000,password:"abc123",balance:0},
    1001:{username:"amal",acno:1001,password:"abc123",balance:0},
    1002:{username:"arun",acno:1002,password:"abc123",balance:0},
    1003:{username:"mega",acno:1003,password:"abc123",balance:0}
  }
  constructor(){}

  ngOnInit():void {

  }

//  login(){
//   var acnum=this.acno
//   var psw=this.psw
//   var userDetails=this.userDetails
//   if(acnum in userDetails){
//       if(psw==userDetails[acnum]["password"]){   //if we want to callkey ,key must inside the quotes but acno is a variable
//       alert('login success')
//       }else{
//         alert('incurrect password')
//       }
//   }else{
//     alert('incurrect account number')
//   }
//  }




   login(acnum:any,psw:any){
    var acnum=acnum.value
    var psw=psw.value    
    var userDetails=this.userDetails
    if(acnum in userDetails){
        if(psw==userDetails[acnum]["password"]){   //if we want to callkey ,key must inside the quotes but acno is a variable
        alert('login success')
        }else{
          alert('incurrect password')
        }
    }else{
      alert('incurrect account number')
    }
   }

}
