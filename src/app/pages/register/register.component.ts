import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;
  iconPassword: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private renderer: Renderer2
  ) {
    this.formRegister = formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required]
    });
    this.iconPassword = false;
  }

  viewPassword(type: string) {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const inputPassword = document.getElementById('password');
      const inputConfirmPassword = document.getElementById('confirmPassword');
      this.renderer.setAttribute(inputPassword, 'type', type);
      this.renderer.setAttribute(inputConfirmPassword, 'type', type);
      this.iconPassword = !this.iconPassword;
    }
  }

  ngOnInit() {
  }

}
