import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FichaClienteComponent } from '../../cliente/ficha-cliente/ficha-cliente.component';
import { FichaClienteModule } from '../../cliente/ficha-cliente/ficha-cliente.module';
import { CccFichaComponent } from './ccc-ficha.component';
import { RegistroComponente } from '../../../_decorators/registro-componente.decorator';
import { FichaPaisModule } from '../../pais/ficha-pais/ficha-pais.module';



@NgModule({
  declarations: [CccFichaComponent],exports:[CccFichaComponent],
  imports: [
    CommonModule
  ]
})

export class CccFichaModule { }
