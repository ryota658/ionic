import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  private readonly TOKEN_KEY = 'user-token'

  getTokenKey(): string {
    return this.TOKEN_KEY;
  }
}
