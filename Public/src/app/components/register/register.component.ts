import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';  
import { StepperModule } from 'primeng/stepper';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [InputTextModule, FormsModule, FloatLabelModule, PasswordModule, ButtonModule , RadioButtonModule, StepperModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})

export class RegisterComponent {
  userValue: string | undefined;
  passValue!: string;
  emailValue!: string;
  passConfirmValue!: string;
  userTypeValue!: boolean;
  passConfValue!: string;
}
