import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from "@angular/router";
import { AppRoute } from "../app-routes";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate([AppRoute.LISTS]);
    }
  }

  onSubmit({ username, password }) {
    this.authService
      .login({ username, password })
      .subscribe(() => this.router.navigate([AppRoute.LISTS]));
    this.loginForm.reset();
  }
}
