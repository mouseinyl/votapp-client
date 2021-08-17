import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import {MenuModule} from 'primeng/menu';
import {ChartModule} from 'primeng/chart';
import { ManagementComponent } from './pages/management/management.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    BrowserAnimationsModule,
    MenuModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
