import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import { MatToolbarModule } from '@angular/material/toolbar' 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import {MatListModule} from '@angular/material/list';
import { AboutComponent } from './about/about.component';
import { WhatidoComponent } from './whatido/whatido.component';
import { BackgroundComponent } from './background/background.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MyprojectComponent } from './myproject/myproject.component';
import { PanelComponent } from './panel/panel.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    WhatidoComponent,
    BackgroundComponent,
    SidebarComponent,
    NavbarComponent,
    MyprojectComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatGridListModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
