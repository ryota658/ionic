import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

import { AuthService } from '../auth.service';

export const AuthGuard: CanActivateFn = (route, state) => {
    // 認証管理サービスのinject
    const authService = inject(AuthService);
    // Routerのinject
    const router = inject(Router);
    if (authService.isAuthenticated()) {
        return true;
    } else {
        router.navigate(['login']);
        return false;
    }
};

