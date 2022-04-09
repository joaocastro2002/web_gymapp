import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isLoginFailed = false;
  isLoggedIn = false;
  errorMessage = '';
  receivedData = {};

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    })
  }

  initForm() {

  }

  onSubmit(): void {
    this.authService.login(this.loginForm.value).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        if (data.status == 'Error') {
          this.isLoginFailed = true;
          this.isLoggedIn = false;
          this.errorMessage = data.message
        } else {
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.router.navigate(['../dashboard'], {relativeTo: this.route})
        }

      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }
}
