import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {

  @Input() value :any=0;
  
  @Input('showNumber')
  showNumber = true;
  
  totalStars:any=[1,2,3,4,5];

}
