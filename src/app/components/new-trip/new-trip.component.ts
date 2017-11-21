import { NewTripService } from './../../shared/services/new-trip.service';
import { Router } from '@angular/router';
import { Trip } from './../../shared/models/trip.model';
import { Component, OnInit } from '@angular/core';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.css']
})
export class NewTripComponent implements OnInit {
  newTrip: Trip = new Trip();
  restrictions: Array<IMultiSelectOption>;
  error: string;

  constructor(private router: Router, private newTripService: NewTripService) { }

  ngOnInit() {
    console.log(this.newTrip)
    this.restrictions = [
      { id: 'Animals', name: 'Animals' },
      { id: 'Plants', name: 'Plants' },
      { id: 'Alcochol', name: 'Alcochol' },
      { id: 'Liquids', name: 'Liquids' },
      { id: 'Food', name: 'Food' },
      { id: 'Tobacco', name: 'Tobacco' },
  ];
  }

  onSubmitTrip(form): void {
    console.log(this.newTrip);
    console.log(form);
    this.newTripService.createNewTrip(this.newTrip).subscribe(
          (trip) => {
            form.reset();
            this.router.navigate(['/']);
          },
          (error) => { this.error = error.message; }
        );
  }
  
}
