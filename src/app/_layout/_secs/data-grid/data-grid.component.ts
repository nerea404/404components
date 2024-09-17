import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PaisService } from './paisService';
import { IdiomaService } from './idiomaService';
import { MonedaService } from './monedaService';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrl: './data-grid.component.scss'
})
export class DataGridComponent {
  onProductChanged($event: Event) {
    throw new Error('Method not implemented.');
    }
    onFocus($event: FocusEvent) {
    throw new Error('Method not implemented.');
    }
    onBlur($event: FocusEvent) {
    throw new Error('Method not implemented.');
    }
      @Input() data: any;
    
      paises: any[] = [];
      idiomas: any[] = [];
      monedas: any[] = [];
      form: FormGroup | undefined;
    selectedProduct: any;
    simpleProducts: any;
    
      constructor(
        private fb: FormBuilder,
        private paisService: PaisService,
        private idiomaService: IdiomaService,
        private monedaService: MonedaService
      ) {
        this.form = this.fb.group({ prueba: [null] });
      }
    
      ngOnInit(): void {
        this.loadPaises();
        this.loadIdiomas();
        this.loadMonedas();
      }
    
      loadPaises(): void {
        this.paisService.getPaises().subscribe(
          (data) => {
            this.paises = data;
          },
          (error) => {
            console.error('Error al cargar los países:', error);
          }
        );
      }
    
      loadIdiomas(): void {
        this.idiomaService.getIdiomas().subscribe(
          (data) => {
            this.idiomas = data;
          },
          (error) => {
            console.error('Error al cargar los idiomas:', error);
          }
        );
      }
    
      loadMonedas(): void {
        this.monedaService.getMonedas().subscribe(
          (data) => {
            this.monedas = data;
          },
          (error) => {
            console.error('Error al cargar las monedas:', error);
          }
        );
      }
    
      onFocusedRowChanged(event: any) {
        console.log('Fila enfocada cambiada:', event);
      }
    
      onSaved(event: any) {
        console.log('Cambios guardados:', event);
      }
      submitForm(){
        console.log('Form:', this.form?.value);
    
      }
    }
    