import { NewTripService } from './shared/services/new-trip.service';
import { MytripsService } from './shared/services/mytrips.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from './shared/services/auth.service';
import { TripsService } from './shared/services/trips.service';
import { HttpModule } from '@angular/http';
import { RegisterService } from './shared/services/register.service';

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
import { TripDetailComponent } from './components/trip-detail/trip-detail.component';
import { MyTripsComponent } from './components/my-trips/my-trips.component';
import { UserTripDetailsComponent } from './components/user-trip-details/user-trip-details.component';
import { NewTripComponent } from './components/new-trip/new-trip.component';
import { EditTripComponent } from './components/edit-trip/edit-trip.component';
import { NguiDatetimePickerModule } from '@ngui/datetime-picker';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'trips', component: TripFinderComponent},
  { path: 'trips/:id', component: TripDetailComponent},
  { path: 'mytrips', component: MyTripsComponent },
  { path: 'mytrips/:id', component: UserTripDetailsComponent },
  { path: 'mytrips/:id/edit', component: EditTripComponent },
  { path: 'newtrip', component: NewTripComponent },
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
    TripDetailComponent,
    MyTripsComponent,
    UserTripDetailsComponent,
    NewTripComponent,
    EditTripComponent,
    
  ],
  imports: [
    BrowserModule,
    NguiDatetimePickerModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    TripsService,
    RegisterService,
    MytripsService,
    NewTripService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
