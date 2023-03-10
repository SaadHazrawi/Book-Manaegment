import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'book-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  loginForm!: FormGroup;
  constructor(private fb:FormBuilder){}
  sendFormData() {
   console.log(this.loginForm);
  }
  fileData()
  {
    this.loginForm.setValue({
      email:"test@t.com",
      password:"*******",
      remb:false
    })
  }
  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required],
      remb:true
    })
    // this.loginForm = new FormGroup({
    //   email: new FormControl(),
    //   password: new FormControl(),
    //   remb: new FormControl()
    // });
  }
}
