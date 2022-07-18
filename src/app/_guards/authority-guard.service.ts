import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";

import { AuthenticationService } from "@app/_services";
import { EUserRole } from "@app/_models";

@Injectable({ providedIn: "root" })
export class AuthorityGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    const hasAdministratorRole =
      currentUser &&
      currentUser.roles.filter((role) => role.id === EUserRole.CEUT_SCHOLAR)
        .length > 0;

    if (hasAdministratorRole) {
      // Retorno true por tener un usuario activo con permisos de administrador.
      // TODO: Preparar el statement para incluir otros roles autorizados.
      return true;
    }

    // Al no haber usuario activo con permisos, se redireccion al home
    // TODO: Agregar un toast que informe de que el usuario no cuenta con los permisos requeridos.
    this.router.navigate(["/home"], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
