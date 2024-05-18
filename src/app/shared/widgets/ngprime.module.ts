import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule, DialogService } from 'primeng/dynamicdialog'; // Ensure DialogService is imported

@NgModule({
  declarations: [],
  imports: [CommonModule, ButtonModule, DialogModule, DynamicDialogModule],
  exports: [ButtonModule, DialogModule, DynamicDialogModule],
  providers: [DialogService], // Add DialogService to providers array
})
export class NgprimeModule {}
