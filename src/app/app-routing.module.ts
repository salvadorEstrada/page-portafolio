import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WhatidoComponent } from './whatido/whatido.component';
import { BackgroundComponent } from './background/background.component';
import { MyprojectComponent } from './myproject/myproject.component';
import { PanelComponent } from './panel/panel.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { TecnologyComponent } from './tecnology/tecnology.component';
import { ResumeComponent } from './resume/resume.component';
import { ManageExamComponent } from './manage-exam/manage-exam.component';
import { HobiesComponent } from './hobies/hobies.component';
import { DataModelComponent } from './data-model/data-model.component';



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

  {
    path:'admin-panel',
    component:AdminPanelComponent
  }, 

  {
    path:'tecnology',
    component:TecnologyComponent
  }, 

  {
    path:'resume',
    component:ResumeComponent
  }, 

  {
    path:'hobbies',
    component:HobiesComponent
  }, 

  {
    path:'manage-exam',
    component:ManageExamComponent
  }, 

  {
    path:'model',
    component:DataModelComponent
  },
  
  {
    path:'**',
    pathMatch: 'full',
    redirectTo: 'home'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
