import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgprimeModule } from './shared/widgets/ngprime.module';
import { MessageService } from 'primeng/api';
import { ToastService } from './features/services/toast.service';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgprimeModule,
  ],
  providers: [MessageService, ToastService],
  bootstrap: [AppComponent],
})
export class AppModule {}
