import { Component, Input, OnInit } from '@angular/core';

interface Section {
  title: string;
  component?: any;
  content?: string;
  isOpened?: boolean;
}

@Component({
  selector: 'app-ccc-accordion',
  templateUrl: './ccc-accordion.component.html',
  styleUrls: ['./ccc-accordion.component.scss']
})
export class CccAccordionComponent implements OnInit {
  @Input() sections: Section[] = [];

  ngOnInit() {
    this.sections.forEach(section => section.isOpened = true);
  }
}
