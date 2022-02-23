import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductFormComponent} from './components/product-form/product-form.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {AppComponent} from './app.component';
import {MySellesComponent} from './components/my-selles/my-selles.component';
import {MyOrdersComponent} from './components/my-orders/my-orders.component';
import {ProductComponent} from './components/product/product.component';
import {ProductDetailsComponent} from './components/product-details/product-details.component'
import {MyProfileComponent} from './components/my-profile/my-profile.component';

const routes: Routes = [
  {path: '', component: MainPageComponent, children:[
   
    
  ]},
   {path: '', redirectTo: '/Home', pathMatch: 'full'}, 
    {path: 'Home', component:MainPageComponent },
    {path: 'Products', component: ProductComponent},
    {path: 'Products/:pid', component: ProductDetailsComponent},
    {path: 'Selles', component: MySellesComponent },
     {path: 'Orders', component: MyOrdersComponent },
     {path: 'Account', component: MyProfileComponent},
  {path:'Add', component:ProductFormComponent},
  {path:'Update/:pid', component:ProductFormComponent},
 

  // {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
