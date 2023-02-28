import { AuthService } from './../../services/auth/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  public isLogged: boolean = false;
    destroyed$: Subject<void> = new Subject();


    constructor(
      private router: Router,
      private auth: AuthService
    ) {}

    public ngOnInit(): void {
      this.auth.checkIsLoggedIn();
      this.auth.userLogged$.subscribe((isLogged) => this.isLogged = isLogged);
    }

}
