import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgprimeModule } from './widgets/ngprime.module';
@NgModule({
  declarations: [SideBarComponent],
  exports: [SideBarComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, NgprimeModule],
})
export class SharedModule {}
