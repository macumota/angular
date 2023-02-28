import { Component } from '@angular/core';
import { AuthService } from 'src/core/services/auth/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent {
  constructor(private auth: AuthService) {}

  public logoutUser() {
    this.auth.logout().subscribe((res) => console.log(res));
  }
}
