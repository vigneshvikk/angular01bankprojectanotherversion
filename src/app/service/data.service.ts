import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {



  currentUser:any
  currentAcno:any




  userDetails:any={
    1000:{username:"anu",acno:1000,password:"abc123",balance:0,transaction:[]},
    1001:{username:"amal",acno:1001,password:"abc123",balance:0,transaction:[]},
    1002:{username:"arun",acno:1002,password:"abc123",balance:0,transaction:[]},
    1003:{username:"mega",acno:1003,password:"abc123",balance:0,transaction:[]}
  }

  constructor() { }

  register(acno:any,uname:any,psw:any){
    var userDetails=this.userDetails
  if (acno in userDetails){
    return false
  }else{
    userDetails[acno]={username:uname,acno, password:psw,balance:0,transaction:[]}
    // console.log(userDetails);
    
    return true
  }
  }

  login(acno:any,psw:any){
    var userDetails=this.userDetails
    if(acno in userDetails){
      if(psw==userDetails[acno]["password"]){   //       if(psw==userDetails[acnum]["password"]){   //if we want to callkey ,key must inside the quotes but acno is a variable
        //store current username

        this.currentUser = userDetails[acno]["username"]
  

        //store current account number
        this.currentAcno=acno 


        return true
      }else{
        return false
      }
    }else{
      return false
    }

  }

  deposite(acno:any,psw:any,amnt:any){
    var amount=parseInt(amnt)  //to convert string amnt to intiger
    var userDetsils=this.userDetails
    if(acno in userDetsils){
      if(psw==userDetsils[acno]["password"]){

        userDetsils[acno]["balance"]+=amount

        //add transaction data

        userDetsils[acno]["transaction"].push(
          {
            Type:"credit" ,
            Amount:amount ,
          }
        )

        // console.log(userDetsils);


        return  userDetsils[acno]["balance"]
      }else {
        return false
      }

    }else{
      return false
    }
  }


  withdraw(acno:any,psw:any,amnt:any){
    var amount=parseInt(amnt)  //to convert string amnt to intiger
    var userDetsils=this.userDetails
    if(acno in userDetsils){
      if(psw==userDetsils[acno]["password"]){
         if(amount<=userDetsils[acno]["balance"]){
        userDetsils[acno]["balance"]-=amount

        
        //add transaction data

        userDetsils[acno]["transaction"].push(
          {
            Type:"debit" ,
            Amount:amount ,
          }
        )
// console.log(userDetsils);

        return  userDetsils[acno]["balance"]
      }else{
        alert('insufficent balance')
      }
      }
      
      else {
        return false
      }

    }else{
      return false
    }
  }



  getTransaction(acno:any){

    return this.userDetails[acno].transaction

  }

}
