import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddTaskComponent } from './components/addtask/addtask.component';

const routes: Routes = [{path:'',component:HeaderComponent},
{path:'dash',component:DashboardComponent},
{path:'add',component:AddTaskComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
