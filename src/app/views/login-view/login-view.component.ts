import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'wb-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css'],
  providers: [
    AngularFireAuth
  ]
})
export class LoginViewComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth) {}

  login() {
  }

  logout() {
  }

  ngOnInit() {
  }

Uymk}
