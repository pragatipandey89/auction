import { ProductOverviewComponent } from './buyerDashboard/product-overview/product-overview.component';
import { ProfileBuyerComponent } from './buyerDashboard/profile-buyer/profile-buyer.component';
import { HistoryComponent } from './buyerDashboard/history/history.component';
import { BrowseComponent } from './buyerDashboard/browse/browse.component';
import { HomeBuyerComponent } from './buyerDashboard/home-buyer/home-buyer.component';
import { BuyerDashboardComponent } from './buyerDashboard/buyer-dashboard/buyer-dashboard.component';
import { ViewProductComponent } from './sellerDashboard/view-product/view-product.component';
import { AddProductComponent } from './sellerDashboard/add-product/add-product.component';
import { SellerDashboardComponent } from './sellerDashboard/seller-dashboard/seller-dashboard.component';
import { SignUPComponent } from './sign-up/sign-up.component';
import { FormComponent } from './form/form.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { TeamsComponent } from './teams/teams.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SignINComponent } from './sign-in/sign-in.component';
import { HomeComponent1 } from './sellerDashboard/home/home.component';
import { ProfileComponent } from './sellerDashboard/profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aboutus', component: AboutComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'signUP', component: SignUPComponent },
  { path: 'signIN', component: SignINComponent },                                                                                        
  {
    path: 'dashboard',
    component: SellerDashboardComponent,
    children: [
      { path: '', component: HomeComponent1 },
      { path: 'home', component: HomeComponent1 },
      { path: 'addProduct', component: AddProductComponent },
      { path: 'viewProduct', component: ViewProductComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  },
  {
    path: 'buyerDashboard',
    component: BuyerDashboardComponent,
    children: [
      { path: '', component: HomeBuyerComponent },
      { path: 'homeBuyer', component: HomeBuyerComponent },
      { path: 'browse', component: BrowseComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'profileBuyer', component: ProfileBuyerComponent },
      { path: 'productOverview', component: ProductOverviewComponent }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, AboutComponent, TeamsComponent, FeedbackComponent, FormComponent]