import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './Component/head/head.component';
import { ProductsComponent } from './Component/products/products.component';
import { CartsComponent } from './Component/carts/carts.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ElectronicsComponent } from './Component/electronics/electronics.component';
import { JewellaryComponent } from './Component/jewellary/jewellary.component';
import { FashionComponent } from './Component/fashion/fashion.component';
import { PaymentComponent } from './Component/payment/payment.component';
import { LogoutComponent } from './Component/logout/logout.component';




@NgModule({
  declarations: [
    AppComponent,
    CartsComponent,
    ProductsComponent,
    HeadComponent,
    SignupComponent,
    LoginComponent,
    ElectronicsComponent,
    JewellaryComponent,
    FashionComponent,
    PaymentComponent,
    LogoutComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
