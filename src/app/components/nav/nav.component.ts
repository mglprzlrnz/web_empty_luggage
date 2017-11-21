import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../shared/models/user.model';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {
  currentUser: User;
  error: string;
  private onUserChanges: Subscription;
  
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.currentUser = this.authService.user;
    this.onUserChanges = this.authService.onUserChanges().subscribe(
      (user) => this.currentUser = user
    );
  }
  
  ngOnDestroy() {
    this.onUserChanges.unsubscribe();
  }

  logout() {
    this.authService.logout().subscribe(
      (ok) => {
        this.router.navigate(['/']);
        location.reload();
      },
      (error) => { this.error = error; },
    );
  }

}
