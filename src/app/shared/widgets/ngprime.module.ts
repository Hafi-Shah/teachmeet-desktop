import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule, DialogService } from 'primeng/dynamicdialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast'; // Import ToastModule
import { MessageService } from 'primeng/api'; // Import MessageService
import { StepsModule } from 'primeng/steps';
import { MultiSelectModule } from 'primeng/multiselect';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    DynamicDialogModule,
    DropdownModule,
    FileUploadModule,
    StepsModule,
    ToastModule, // Add ToastModule to imports
    MultiSelectModule,
  ],
  exports: [
    ButtonModule,
    DialogModule,
    DynamicDialogModule,
    DropdownModule,
    StepsModule,
    FileUploadModule,
    ToastModule, // Export ToastModule
    MultiSelectModule,
  ],
  providers: [
    DialogService,
    MessageService, // Provide MessageService
  ],
})
export class NgprimeModule {}
