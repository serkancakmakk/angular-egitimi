import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule here
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { testInterceptor } from './test.interceptor';  // Import your interceptor

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule  // Add HttpClientModule to imports
  ],
  providers: [
    
      provide: HTTP_INTERCEPTORS,
      useClass: testInterceptor,
      multi: true
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
