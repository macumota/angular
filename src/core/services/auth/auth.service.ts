import { AuthError, IUser, IUserSignInResponse } from './models/auth.models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject, Observable, tap, catchError, of } from 'rxjs';

const AUTH_URL = 'http://localhost:3000/user';
const CHARACTER_URL = 'http://localhost:3000/characters';
const TOKEN_KEY = 'user-token';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userLogged$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  constructor(private http: HttpClient,
    private router: Router) {}

    public login(user: IUser): Observable<IUser> {
      return this.http.post<IUser>(`${AUTH_URL}/login`, user, httpOptions).pipe(
        tap((res) => {
          this.userLogged$.next(true);
          this.router.navigate(['account']);
        })
      );
    }
  
    public loginJWT(user: IUser): Observable<IUserSignInResponse> {
      return this.http.post<IUserSignInResponse>(`${AUTH_URL}/login-jwt`, user).pipe(
        tap((res: IUserSignInResponse) => {
          const userToStore = JSON.stringify({
            token: res.token,
            id: res.user._id,
            email: res.user.email
          });
          localStorage.setItem(TOKEN_KEY, userToStore);
          this.userLogged$.next(true);
          this.router.navigate(['account']);
        })
      );
    }
  
    public register(user: IUser): Observable<IUser> {
      return this.http.post<IUser>(`${AUTH_URL}/register`, user);
    }
  
    public logoutJWT() {
      const removeToken = localStorage.removeItem(TOKEN_KEY);
      this.userLogged$.next(false);
      if (removeToken !== null) {
        this.router.navigate(['']);
      }
    }
  
    public isLoggedJWT(): boolean {
      const authToken = localStorage.getItem(TOKEN_KEY);
      if (!authToken) { return false; }
      const isValidToken = JSON.parse(authToken)?.token;
      return !!isValidToken;
    }
  
    public checkIsLoggedIn() {
      this.http.get<IUser>(`${AUTH_URL}/me`, httpOptions).pipe(
        catchError((err) => {
          let errorType = AuthError.GENERIC;
          if (err.status === 401) {
            errorType = AuthError.AUTH;
          }
          return of(errorType);
        }),
        tap((res: IUser | AuthError) => {
          const isLogged = res !== AuthError.AUTH;
          this.userLogged$.next(isLogged);
        })
      ).subscribe();
    }
  
    public getToken(): string | null {
      const authToken = localStorage.getItem(TOKEN_KEY);
      return authToken ? JSON.parse(authToken)?.token : null;
    }
  
    public logout(): Observable<string> {
      return this.http.post<string>(`${AUTH_URL}/logout`, undefined, httpOptions).pipe(
        tap(() => {
          this.userLogged$.next(false);
          this.router.navigate(['']);
        })
      );
    }
  
    public getCharacters(): Observable<unknown> {
      return this.http.get<unknown>(CHARACTER_URL);
    }
  
    public getCharactersById(): Observable<unknown> {
      return this.http.get<unknown>(`${CHARACTER_URL}/637d3340f26c223a06dd7fcd`, httpOptions)
    }
  }
    