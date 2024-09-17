import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ccc-splitter',
  templateUrl: './ccc-splitter.component.html',
  styleUrls: ['./ccc-splitter.component.scss'],
})
export class CccSplitterComponent implements OnInit {
  @Input() isLeftPaneVisible: boolean = true;
  @Input() isRightPaneVisible: boolean = true;
  @Input() jsonData: any;
  @Output() addTab = new EventEmitter<void>();

  leftPaneSize: string = '20%';
  rightPaneSize: string = '20%';
  centerPaneSize: string = '60%';

  ngOnInit() {
    this.adjustPanelSizes();
  }

  adjustPanelSizes() {
    if (this.isLeftPaneVisible && this.isRightPaneVisible) {
      this.leftPaneSize = '20%';
      this.centerPaneSize = '60%';
      this.rightPaneSize = '20%';
    } else if (this.isLeftPaneVisible && !this.isRightPaneVisible) {
      this.leftPaneSize = '20%';
      this.centerPaneSize = '80%';
      this.rightPaneSize = '0%';
    } else if (!this.isLeftPaneVisible && this.isRightPaneVisible) {
      this.leftPaneSize = '0%';
      this.centerPaneSize = '80%';
      this.rightPaneSize = '20%';
    } else {
      this.leftPaneSize = '0%';
      this.centerPaneSize = '100%';
      this.rightPaneSize = '0%';
    }
  }

  toggleLeftPane() {
    this.isLeftPaneVisible = !this.isLeftPaneVisible;
    this.adjustPanelSizes();
  }

  toggleRightPane() {
    this.isRightPaneVisible = !this.isRightPaneVisible;
    this.adjustPanelSizes();
  }

  onAddTab() {
    this.addTab.emit();
  }
}