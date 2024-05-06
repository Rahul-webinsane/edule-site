import { Component, Input } from '@angular/core';
import { Feedback } from 'src/app/home/models/course.models';

@Component({
  selector: 'app-feedback-card',
  templateUrl: './feedback-card.component.html',
  styleUrls: ['./feedback-card.component.css']
})
export class FeedbackCardComponent {

  @Input('item')
  item!:Feedback;
}
