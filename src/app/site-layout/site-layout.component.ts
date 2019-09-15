import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss']
})
export class SiteLayoutComponent implements OnInit {
  userAuthenticated: boolean;

  constructor(private authService: AuthService) {
    this.userAuthenticated = this.authService.isLoggedIn();
  }

  ngOnInit() {
  }

}
