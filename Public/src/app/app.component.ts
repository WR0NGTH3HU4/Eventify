import { Component, OnInit } from '@angular/core';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, InputIconModule, IconFieldModule, InputTextModule, ButtonModule, FormsModule, MenubarModule, CommonModule,DialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Főoldal';

  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
  

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
        {
            label: 'Felhasználó Feltételek',
            icon: 'pi pi-file',
            routerLink: '/'
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
            command: () => this.onClick()
            
        },

        {
            label: 'Regisztráció',
            icon: 'pi pi-user-plus',
            routerLink: '/'
        }
    ]
}
    onClick(): void {
        throw new Error('Method not implemented.');
    }
}
