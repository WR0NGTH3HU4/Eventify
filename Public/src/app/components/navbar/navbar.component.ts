import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonModule, DialogModule, CommonModule, FormsModule, MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
  

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Statisztika',
        icon: 'pi pi-file',
        routerLink: '/stats',
      },
        
        {
            label: 'Felhasználó Feltételek',
            icon: 'pi pi-file',
            routerLink: '/',
            command: () => this.showDialog()
        },

        {
            label: 'Események',
            icon: 'pi pi-calendar',
            routerLink: '/'
        },

        {
            label: 'Belépés',
            icon: 'pi pi-sign-in',
            routerLink: '/login',
         //   command: () => this.loginNav()
            
        },

        {
            label: 'Regisztráció',
            icon: 'pi pi-user-plus',
            routerLink: '/'
        },
        {
          label: 'Vissza a főoldalra',
          icon: 'pi pi-home',
          routerLink: '/landingpage'
      }
    ]
}
}
