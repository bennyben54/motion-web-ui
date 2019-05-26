import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.checkCredentials();
  }

  logout() {
    this.authService.logout();
  }

  authenticateImg(link: string): string {
    return link + '?bearer=' + this.authService.accessToken.access_token;
  }

}
