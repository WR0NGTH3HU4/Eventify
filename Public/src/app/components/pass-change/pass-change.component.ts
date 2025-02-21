import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { InputIconModule } from 'primeng/inputicon';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-pass-change',
  standalone: true,
  imports: [RouterModule, InputIconModule,  InputTextModule, ButtonModule, FormsModule, CommonModule, FooterComponent, FloatLabelModule, PasswordModule],
  templateUrl: './pass-change.component.html',
  styleUrl: './pass-change.component.scss'
})
export class PassChangeComponent {
  userValue: string | undefined;
  passValue!: string;
}
