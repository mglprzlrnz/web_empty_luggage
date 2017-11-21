import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './../../shared/models/user.model';
import { RegisterService } from './../../shared/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  error: string;

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
  }

  onSubmitRegister(registerForm): void {
    this.registerService.register(this.user).subscribe(
      (user) => {
        registerForm.reset();
        this.router.navigate(['/']);
        location.reload();
      },
      (error) => { this.error = error.message; }
    );
  }

}
