import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
user:any

acno:any
psw:any
amnt:any

acno1:any
psw1:any
amnt1:any
  constructor(private ds:DataService){
    //access variable from dataservice and storae in a variable
    this.user=this.ds.currentUser
  }

  ngOnInit():void {

  }


  deposite(){
    var acno=this.acno
    var psw =this.psw
    var amnt=this.amnt

    const result = this.ds.deposite(acno,psw,amnt)
   
    if(result){
      alert(`Your account has been credited with amount ${amnt} and the available balance ${result}`)
    }
    else{
      alert('incorrect account number or password')
    }

  }



  withdraw(){
    var acno=this.acno1
    var psw =this.psw1
    var amnt=this.amnt1

    const result = this.ds.withdraw(acno,psw,amnt)
   
    if(result){
      alert(`Your account has been debited with amount ${amnt} and the available balance ${result}`)
    }
    else{
      alert('incorrect account number or password')
    }
  }
}
