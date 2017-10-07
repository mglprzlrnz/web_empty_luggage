import { NewTripService } from './../../shared/services/new-trip.service';
import { Router } from '@angular/router';
import { Trip, Place } from './../../shared/models/trip.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.css']
})
export class NewTripComponent implements OnInit {
  newTrip: Trip = new Trip();
  error: string;

  constructor(private router: Router, private newTripService: NewTripService) { }

  ngOnInit() {
    console.log(this.newTrip)
   
  }
  onSubmitTrip(newTrip) {
    console.log(this.newTrip);
    console.log(newTrip);
  }
  // onSubmitTrip(form): void {
  //   this.newTripService.createNewTrip(this.newTrip).subscribe(
  //     (user) => {
  //       form.reset();
  //       this.router.navigate(['/mytrips/:id']);
  //     },
  //     (error) => { this.error = error.message; }
  //   );
  // }

}
