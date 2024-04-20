import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonItem, IonButton, IonLabel } from '@ionic/angular/standalone';
import { uuidv7 } from "@kripod/uuidv7";
import { IUser } from 'src/shared/interface/user.interface';
import { ConstantsService } from 'src/app/shared/constants.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInput, IonItem, IonButton, IonLabel]
})
export class LoginPage {
  private currentUserSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  user: IUser = {
    name: "",
    password: "",
  };
  errorMessage = '';

  constructor(private readonly constantsService: ConstantsService) { }

  login(): void {
    const { name, password } = this.user;
    const id = uuidv7();
    if (!name || !password) {
      this.errorMessage = 'ユーザー名とパスワードを入力してください。';
      return;
    }
    localStorage.setItem(this.constantsService.getTokenKey(), id)
    this.currentUserSubject.next({ "id": id, "name": name, "password": password });
    return;
  }
}
