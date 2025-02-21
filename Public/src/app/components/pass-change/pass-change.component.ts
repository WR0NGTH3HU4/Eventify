import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { FooterComponent } from '../footer/footer.component';



@Component({
  selector: 'app-pass-change',
  standalone: true,
  imports: [RouterModule, InputIconModule, IconFieldModule, InputTextModule, ButtonModule, FormsModule, MenubarModule, CommonModule, DialogModule, FooterComponent],
  templateUrl: './pass-change.component.html',
  styleUrl: './pass-change.component.scss'
})
export class PassChangeComponent {

}
