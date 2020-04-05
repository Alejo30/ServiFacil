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
        label: 'Categorias',
        icon: 'pi pi-fw pi-file',
        items: [{
                label: 'New', 
                icon: 'pi pi-fw pi-plus',
                items: [
                    {label: 'Project'},
                    {label: 'Other'},
                ]
            },
            {label: 'Open'},
            {separator:true},
            {label: 'Quit'}
        ]
    },
    {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
            {label: 'Delete', icon: 'pi pi-fw pi-trash'},
            {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
        ]
    },
    {
        label: 'Ayuda',
        icon: 'pi pi-fw pi-question',
        items: [
            {
                label: 'Contents'
            },
            {
                label: 'Search', 
                icon: 'pi pi-fw pi-search', 
                items: [
                    {
                        label: 'Text', 
                        items: [
                            {
                                label: 'Workspace'
                            }
                        ]
                    },
                    {
                        label: 'File'
                    }
            ]}
        ]
    },
    {
        label: 'Configuracion',
        icon: 'pi pi-fw pi-cog',
        items: [
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {label: 'Save', icon: 'pi pi-fw pi-save'},
                    {label: 'Update', icon: 'pi pi-fw pi-save'},
                ]
            },
            {
                label: 'Other',
                icon: 'pi pi-fw pi-tags',
                items: [
                    {label: 'Delete', icon: 'pi pi-fw pi-minus'}
                ]
            }
        ]
    },
    {separator:true},
    {
        label: 'Perfil', icon: 'pi pi-fw pi-times'
    }
    ];
  }

}
