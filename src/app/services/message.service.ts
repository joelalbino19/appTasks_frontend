import { Injectable } from '@angular/core';
import { ToastrService, IndividualConfig } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  private defaultOptions: Partial<IndividualConfig> = {
    closeButton: true,
    timeOut: 3000,
    progressBar: true,
    positionClass: 'toast-top-right',
    enableHtml: true,
    toastClass: 'ngx-toastr' 
  };

  showSuccess(message: string, title: string, options?: Partial<IndividualConfig>): void {
    this.toastr.success(message, title, { ...this.defaultOptions, ...options });
  }

  showError(message: string, title: string, options?: Partial<IndividualConfig>): void {
    this.toastr.error(message, title, { ...this.defaultOptions, ...options });
  }

  showInfo(message: string, title: string, options?: Partial<IndividualConfig>): void {
    this.toastr.info(message, title, { ...this.defaultOptions, ...options });
  }

  showWarning(message: string, title: string, options?: Partial<IndividualConfig>): void {
    this.toastr.warning(message, title, { ...this.defaultOptions, ...options });
  }
}
