import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartsComponent } from './Component/carts/carts.component';
import { ElectronicsComponent } from './Component/electronics/electronics.component';
import { FashionComponent } from './Component/fashion/fashion.component';
import { JewellaryComponent } from './Component/jewellary/jewellary.component';
import { PaymentComponent } from './Component/payment/payment.component';
import { ProductsComponent } from './Component/products/products.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './Component/logout/logout.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:"full"},
  {path:'products', component: ProductsComponent},
  {path:'carts', component: CartsComponent},
  {path:'signup', component: SignupComponent},
  {path:'login', component: LoginComponent},
  {path:'electronics', component: ElectronicsComponent},
  {path:'jewellary',component: JewellaryComponent},
  {path:'fashion',component: FashionComponent},
  {path:'payment',component: PaymentComponent},
  {path:'logout',component: LogoutComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
