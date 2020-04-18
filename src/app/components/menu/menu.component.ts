import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public items: MenuItem[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-fw pi-home',
        command: () => this.router.navigate(["inicio"])
    },
    {
        label: 'Categoria', icon: 'pi pi-fw pi-th-large'
    },
    {
        label: 'Productos', icon: 'pi pi-fw pi-tag'
    },
    {
        label: 'Promociona tus Servicios', icon: 'pi pi-fw pi-globe'
    },
    {
        label: 'Iniciar Sesión', icon: 'pi pi-fw pi-sign-in',
        command: (url) => this.router.navigate(["login"])
    },
    {separator: true},
    {
        label: 'Mi Perfil', icon: 'pi pi-fw pi-user',
        command: (url) => this.router.navigate(["miPerfil"])
    },
    {
      label: 'Administración', icon: 'pi pi-fw pi-user',
      command: (url) => this.router.navigate(["login"])
  }
    ];
  }

}
