import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, OnInit } from '@angular/core';
import { RegistroComponente } from '../../../_decorators/registro-componente.decorator';
import { ComponentResolverService } from '../../../_services/component-resolver.service';
import { ConfigSplitter } from '../ccc-splitter/_interfaces/config-splitter.interface';
import { TabsComponent } from '../../tabs/tabs.component';

@Component({
  selector: 'app-ccc-lista',
  templateUrl: './ccc-lista.component.html',
  styleUrl: './ccc-lista.component.scss'
})
@RegistroComponente("CccListaComponent")
export class CccListaComponent implements OnInit {
  @ViewChild(TabsComponent) tabsComponent: any;
  @ViewChild('leftPaneHeaderContainer') leftPaneHeaderContainer!: ElementRef;

  @Output() addTab = new EventEmitter<void>();

  @Input() isLeftPaneVisible: boolean = false;
  @Input() isRightPaneVisible: boolean = false;
  @Input() jsonData: any;

  configSplitter: ConfigSplitter = {
    panelDer_size: '10',
    panelDerecho: this.isRightPaneVisible,
    panelIzquierdo: this.isLeftPaneVisible,
    panelIzq_size: "20",
  };

  leftPaneSize: string = '30px';
  rightPaneSize: string = '30px';

  constructor(private componentResolverService: ComponentResolverService) {}

  ngOnInit() {
    if (this.jsonData) {
      this.isLeftPaneVisible = this.jsonData.isLeftPaneVisible;
      this.isRightPaneVisible = this.jsonData.isRightPaneVisible;
      this.leftPaneSize = this.jsonData.leftPaneSize;
      this.rightPaneSize = this.jsonData.rightPaneSize;
    }
    this.updateConfigSplitter();
    this.adjustPanelSizes();
  }

  ngAfterViewInit(): void {
    this.setupResizeObserver();
  }

  private updateConfigSplitter() {
    this.configSplitter = {
      ...this.configSplitter,
      panelDerecho: this.isRightPaneVisible,
      panelIzquierdo: this.isLeftPaneVisible,
    };
  }

  private setupResizeObserver() {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.contentRect.width < 150) {
          this.leftPaneHeaderContainer.nativeElement.classList.add('rotate-text');
        } else {
          this.leftPaneHeaderContainer.nativeElement.classList.remove('rotate-text');
        }
      }
    });

    resizeObserver.observe(this.leftPaneHeaderContainer.nativeElement);
  }

  onAddTab() {
    this.addTab.emit();
  }

  adjustPanelSizes() {
    this.leftPaneSize = this.leftPaneSize || '30px';
    this.rightPaneSize = this.rightPaneSize || '30px';
  }
}