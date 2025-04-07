import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route,state) => {   
  const token:string | null = localStorage.getItem("token")
  console.log('Token',token)
  const router = inject(Router);
  if (!token)
    {
      router.navigateByUrl("/login");
      alert(token)
      return false;
    }
    alert(token)
    return true;
};
