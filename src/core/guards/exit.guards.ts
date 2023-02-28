import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateExamComponent } from 'src/pages/create-exam/create-exam.component';

@Injectable({
  providedIn: 'root'
})
export class ExitGuard implements CanDeactivate<CreateExamComponent> {
  canDeactivate(
    component: CreateExamComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component?.isExamCreated || !component?.examForm?.dirty) {
      return true;
    }
    return window.confirm('¿Estás seguro de que quieres salir? No se guardarán los datos del formulario');
  }
  
}