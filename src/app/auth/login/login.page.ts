import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonItem, IonButton, IonLabel } from '@ionic/angular/standalone';
import { IUser } from 'src/shared/interface/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInput, IonItem, IonButton, IonLabel]
})
export class LoginPage {
  user: IUser = {
    name: "",
    password: "",
  };
  errorMessage = '';

  login(): void {
    const { name, password } = this.user;
    if (!name || !password) {
      this.errorMessage = 'ユーザー名とパスワードを入力してください。';
      return;
    }
    this.errorMessage = '';
    return;
  }
}
