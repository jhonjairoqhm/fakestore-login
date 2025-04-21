import { Component, inject } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);
  username:string = '';
  password:string = '';

  login(username:string, password:string) {
    let data = {
      username: username,
      password: password
    };
    this.authService.loginAuth(data).subscribe({
      next: (resp) => {
        if(resp) {
          this.authService.login.set(true);
        }
          this.router.navigate(['/']);
      },
      error: (error) => {
        alert('Error handler :' + error.status);
      },
    });
  }
}
