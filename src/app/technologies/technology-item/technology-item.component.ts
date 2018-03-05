import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-technology-item',
  templateUrl: './technology-item.component.html',
  styleUrls: ['./technology-item.component.css']
})
export class TechnologyItemComponent implements OnInit {

  @Input() technology;
  @Input() skillLevel;

  constructor() { }

  ngOnInit() {
  }

}
