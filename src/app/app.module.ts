import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { TripSearchComponent } from './components/trip-search/trip-search.component';
import { TopTripsComponent } from './components/top-trips/top-trips.component';
import { TripFinderComponent } from './components/trip-finder/trip-finder.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FinderMenuComponent } from './components/finder-menu/finder-menu.component';
import { FinderResultsComponent } from './components/finder-results/finder-results.component';
import { HomeComponent } from './components/home/home.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'finder', component: TripFinderComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TripSearchComponent,
    TopTripsComponent,
    TripFinderComponent,
    RegisterComponent,
    LoginComponent,
    FinderMenuComponent,
    FinderResultsComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
