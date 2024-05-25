import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule, DialogService } from 'primeng/dynamicdialog'; // Ensure DialogService is imported
import { DropdownModule } from 'primeng/dropdown';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    DynamicDialogModule,
    DropdownModule,
  ],
  exports: [ButtonModule, DialogModule, DynamicDialogModule, DropdownModule],
  providers: [DialogService], // Add DialogService to providers array
})
export class NgprimeModule {}
