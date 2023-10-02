import { RoutesService, eLayoutType } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';

export const APP_ROUTE_PROVIDER = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];

function configureRoutes(routes: RoutesService) {
  return () => {
    routes.add([
      {
        path: '/',
        name: '::Menu:Home',
        iconClass: 'fas fa-home',
        order: 1,
        layout: eLayoutType.application,
      },
      {
        path: '/smartphone',
        name: '::Menu:SmartPhone',
        iconClass: 'fas fa-phone',
        order: 2,
        layout: eLayoutType.application,
      },
      {
        path: '/smartphones',
        name: '::Menu:Smarts',
        parentName: '::Menu:SmartPhone',
        layout: eLayoutType.application,
      },
    ]);
  };
}

