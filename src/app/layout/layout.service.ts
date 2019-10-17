import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor() { }

  
  public getItemsMenuleft() : any {
    return  [{
      icon: "home",
      tittle:"inicio",
      routerLink: "inicio",
      type:"items_menu_left",
      position: 0
    },
    {
      icon: "computer",
      tittle:"Monitoreo",
      routerLink: "monitoreo",
      type:"items_menu_left",
      position: 1
    },
    {
      icon: "flight_land",
      tittle:"Aeropuerto",
      routerLink: "aeropuerto",
      type:"items_menu_left",
      position: 2
    },
    {
      icon: "settings_applications",
      tittle:"Panel de administracion",
      routerLink: "admin_setings",
      type:"items_menu_left",
      position: 3
    }]
  }
  
}
