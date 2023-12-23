import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { CustomersComponent } from './component/customers/customers.component';
import { AllocationComponent } from './component/allocation/allocation.component';
import { TabComponent } from './component/tab/tab.component';
import { MenuComponent } from './component/menu/menu.component';

const routes: Routes = [
  {
    path: 'login',
   component:LoginComponent
  },
  {
    path: 'tab',
    component: TabComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'customers', component: CustomersComponent },
      { path: 'allocation', component: AllocationComponent },
      { path: 'menu', component: MenuComponent
      },
      // ... other child routes
      { path: '', redirectTo: 'home', pathMatch: 'full' } // default child route
    ]
  }
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
