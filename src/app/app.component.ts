import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-form';
 @ViewChild('registrationForm') form! : NgForm;

  firstName : string = '';
  lastName : string = '';
  dob : string | Date = '';
  emailAddress : string = '';
  gender : string = '';
  country : string = '';
  city : string = '';
  region : string = '';
  postal:string = '';
  calculate : string = '';
  uName:string = '';
  isAgree : boolean = false;
  

  genders = [
    {id:'check-male' , value:'male',display:'Male'},
    {id:'check-female' , value:'female',display:'Female'},
    {id:'check-other' , value:'other',display:'Prefer Not To ay'},
  ]
 
  OnFormSubmitted(){
    console.log(this.form);
      console.log(this.form.value.firstName);   
      console.log(this.form.value.lastName);   
      console.log(this.form.value.gender);   
      console.log(this.form.value.address.country);   
      console.log(this.form.value.address.city);   

      this.firstName = this.form.value.firstName;
      this.lastName = this.form.value.lastName;
      this.gender = this.form.value.gender;
      this.country = this.form.value.address.country;
      this.city  = this.form.value.address.city;
      this.region  = this.form.value.address.Region;
      this.postal = this.form.value.address.Postal;
      this.dob = this.form.value.dob
      this.emailAddress = this.form.value.email;
      this.isAgree = this.form.value;

      // this.form.reset();

      this.form.form.patchValue({
        gender:'male',
        address:{
          country:'india'
        }
      })

  }

  GenerateUsername(){

    this.firstName = this.form.value.firstName;
    this.lastName = this.form.value.lastName;
    this.dob = this.form.value.dob;

    let userName:string  = "";

    if(this.firstName.length >= 3)
    {
          userName += this.firstName.slice(0, 2);
          this.calculate += this.firstName.slice(0,1).toUpperCase();
    }
    else
    {
         userName += this.firstName;
    }
    if(this.lastName.length >= 3)
    {
      userName  += this.lastName.slice(0, 2);
      this.calculate += this.lastName.slice(0,1).toUpperCase();
    }
    else
    {
      userName += this.lastName;
    }

    let dateTime = new Date(this.dob)
    userName += dateTime.getFullYear();
    
    userName.toLowerCase();
    console.log(userName);
    this.uName = userName;
  //  this.form.value.username = userName;
     
    // this.form.setValue({


      // in this setvalue we went to provide all object .


    //     firstname : this.form.value.firstname,
    //     lastName :this.form.value.lastName,
    //     email : this.form.value.email,
    //     phone : this.form.value.phone,
    //     dob:this.form.value.dob,
    //     gender:this.form.value.gender,
    //     username:userName,
    //     address:{
    //       Street1:this.form.value.address.Street1,
    //       Street2:this.form.value.address.Street2,
    //       country:this.form.value.address.country,
    //       city:this.form.value.address.city,
    //       Region:this.form.value.address.Region,
    //       Postal:this.form.value.address.Postal
    //     }
    // })

    this.form.form.patchValue({
      username: userName,
      address:{
        // country:'india'
      }
    })

  }
  
}
