import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { TeamsComponent } from './teams/teams.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormComponent } from './form/form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SignUPComponent } from './sign-up/sign-up.component';
import { SignINComponent } from './sign-in/sign-in.component';
import { SellerDashboardComponent } from './sellerDashboard/seller-dashboard/seller-dashboard.component';
import { NavigationComponent } from './sellerDashboard/navigation/navigation.component';
import { AddProductComponent } from './sellerDashboard/add-product/add-product.component';
import { ViewProductComponent } from './sellerDashboard/view-product/view-product.component';
import { ProfileComponent } from './sellerDashboard/profile/profile.component';
import { HomeComponent1 } from './sellerDashboard/home/home.component';
import { BuyerDashboardComponent } from './buyerDashboard/buyer-dashboard/buyer-dashboard.component';
import { HomeBuyerComponent } from './buyerDashboard/home-buyer/home-buyer.component';
import { ProfileBuyerComponent } from './buyerDashboard/profile-buyer/profile-buyer.component';
import { BrowseComponent } from './buyerDashboard/browse/browse.component';
import { HistoryComponent } from './buyerDashboard/history/history.component';
import { ProductOverviewComponent } from './buyerDashboard/product-overview/product-overview.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    AboutComponent,
    TeamsComponent,
    FeedbackComponent,
    FormComponent,
    SignUPComponent,
    SignINComponent,
    SellerDashboardComponent,
    NavigationComponent,
    AddProductComponent,
    ViewProductComponent,
    ProfileComponent,
    HomeComponent1,
    BuyerDashboardComponent,
    HomeBuyerComponent,
    ProfileBuyerComponent,
    BrowseComponent,
    HistoryComponent,
    ProductOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
