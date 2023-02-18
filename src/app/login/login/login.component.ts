import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(
    private firebase: FirebaseService,
    private router: Router,
    private location:Location
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
      
    })
  }

  ngOnInit(): void {
  }

 

  onSubmit() {
    this.firebase.login(this.formLogin.value)
    .then(
      () => {
        this.router.navigate(['/menu']);
      },
      (error) => {
        alert("Error");
        console.log(error);
      }
    );
  }

  goBack(): void {
    this.location.back();
  }

  
}
