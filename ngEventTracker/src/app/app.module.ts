import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrackerComponent } from './tracker/tracker.component';
import { HttpClientModule } from '@angular/common/http';
import { TrackerService } from './tracker.service';
import { DatePipe } from '@angular/common';
import { IncompletePipe } from './incomplete.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TrackerComponent,
    IncompletePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TrackerService,
    DatePipe,
    IncompletePipe
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
