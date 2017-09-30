import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  currentUser: User;
  error: string;
  
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.currentUser = this.authService.user;
  }

  logout() {
    this.authService.logout().subscribe(
      (ok) => {},
      (error) => { this.error = error; },
    );
  }

}
