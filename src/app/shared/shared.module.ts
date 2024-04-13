import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SideBarComponent],
  exports: [SideBarComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class SharedModule {}
