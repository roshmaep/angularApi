import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-passengerview',
  templateUrl: './passengerview.component.html',
  styleUrls: ['./passengerview.component.css']
})
export class PassengerviewComponent {

  constructor(private api:ApiService){
    api.fetchPassenger().subscribe((response)=>{this.passenger=response;})
  }
  passenger:any=[]
}

