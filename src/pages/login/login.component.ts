import { IUser } from '../../core/services/auth/models/auth.models';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Component } from '@angular/core';
import { AuthService } from 'src/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public loginForm?: FormGroup;
  public formError?: string;

  constructor(
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.email]),
      password: new FormControl(''),
    });
  }

  public loginUser() {
    if (!this.loginForm?.valid) {
      return;
    }
    const user: IUser = this.loginForm.value;
    this.auth.login(user).subscribe({
      next: (res) => {
        console.log(res);
        this.loginForm?.reset();
      },
      error: (err) => {
        this.formError = err.error;
        this.loginForm?.reset();
      },
    });
    this.router.navigate(['account']);
  }
}