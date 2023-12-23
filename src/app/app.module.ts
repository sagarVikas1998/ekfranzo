import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Make sure ReactiveFormsModule is imported
import { AllocationComponent } from './component/allocation/allocation.component';
import { CustomersComponent } from './component/customers/customers.component';
import { HomeComponent } from './component/home/home.component';
import { MenuComponent } from './component/menu/menu.component';
import { TabComponent } from './component/tab/tab.component';


@NgModule({
  declarations: [AppComponent,LoginComponent,MenuComponent,TabComponent,AllocationComponent,CustomersComponent,HomeComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule,ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
