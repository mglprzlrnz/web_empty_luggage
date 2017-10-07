import { Component, OnInit } from '@angular/core';
import { TripSearcher } from '../../shared/models/trip-searcher.model';
import { TripsService } from '../../shared/services/trips.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-search',
  templateUrl: './trip-search.component.html',
  styleUrls: ['./trip-search.component.css']
})
export class TripSearchComponent implements OnInit {
  searcher: TripSearcher = new TripSearcher();
  error: string;
  
  constructor(private tripsService: TripsService, private router: Router) {}

  ngOnInit() {}

  onSubmitTripSearch(form) {
    this.tripsService.getAll(this.searcher).subscribe(
      (trips) => {
        form.reset();
        this.router.navigate(['/trips']);
      },
      (error) => { this.error = error.message; }
    );
  }

}
