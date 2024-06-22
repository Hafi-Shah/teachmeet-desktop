import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule, DialogService } from 'primeng/dynamicdialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast'; // Import ToastModule
import { MessageService } from 'primeng/api'; // Import MessageService

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    DynamicDialogModule,
    DropdownModule,
    FileUploadModule,
    ToastModule, // Add ToastModule to imports
  ],
  exports: [
    ButtonModule,
    DialogModule,
    DynamicDialogModule,
    DropdownModule,
    FileUploadModule,
    ToastModule, // Export ToastModule
  ],
  providers: [
    DialogService,
    MessageService, // Provide MessageService
  ],
})
export class NgprimeModule {}
