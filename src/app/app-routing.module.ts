import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WhatidoComponent } from './whatido/whatido.component';
import { BackgroundComponent } from './background/background.component';
import { MyprojectComponent } from './myproject/myproject.component';
import { PanelComponent } from './panel/panel.component';


const routes: Routes = [  
  {
    path:'home',
    component:HomeComponent
  }, 

  {
    path:'about-me',
    component:AboutComponent
  }, 

  {
    path:'whatido',
    component:WhatidoComponent
  }, 

  {
    path:'background',
    component:BackgroundComponent
  },

  {
    path:'my-project',
    component:MyprojectComponent
  }, 

  {
    path:'panel',
    component:PanelComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
