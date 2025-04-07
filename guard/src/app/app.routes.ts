// import { Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component';
// import { authGuard } from './auth.guard';
// import { LayoutsComponent } from './layouts/layouts.component';

// export const routes: Routes = [
//     {
//         path: "",
//         component: LayoutsComponent,
//         children: [
//             {
//                 path: "home",
//                 canActivateChild: [authGuard],
//                 component: HomeComponent
//             },
//         ]
//     },
//     {
//         path: "login",
//         component: LoginComponent
//     }
//
// ];
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { LayoutsComponent } from './layouts/layouts.component';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { checkGuard } from './check.guard';

export const routes: Routes = [
    {
        path: "",
        component: LayoutsComponent,
        children: [
            {
                path: "home",
                canDeactivate:[checkGuard],
                canActivateChild:[() => inject(AuthService).isAuthenticated()],
                component: HomeComponent
            },
        ]
    },
    {
        path: "login",
        component: LoginComponent
    }
];