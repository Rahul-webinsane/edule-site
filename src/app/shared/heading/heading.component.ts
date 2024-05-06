import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent {

  @Input() subHeading ="";
  @Input() headingText1 ="";
  @Input() headingText2 ="";
  @Input() headingText3 ="";
  @Input() specialHeadingId :number | string = 2;
  @Input() align = 'L';  // C-Center , L-Left


 }
