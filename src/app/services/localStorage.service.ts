import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private isLocalStorageAvailable(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }

  setItem(key: string, value: string): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem(key, value);
    } else {
      console.warn('localStorage no está disponible');
    }
  }

  getItem(key: string): string | null {
    if (this.isLocalStorageAvailable()) {
      return localStorage.getItem(key);
    } else {
      console.warn('localStorage no está disponible');
      return null;
    }
  }

  removeItem(key: string): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem(key);
    } else {
      console.warn('localStorage no está disponible');
    }
  }

  clear(): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.clear();
    } else {
      console.warn('localStorage no está disponible');
    }
  }
}
