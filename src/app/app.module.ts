import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './_layout/header/header.module';
import { BodyModule } from './_layout/body/body.module';
import { FormsComponentsComponent } from './_layout/forms-components/forms-components.component';
import { FormsComponentsModule } from './_layout/forms-components/forms-components.module';
import { DatagridComponentModule } from './_layout/datagrid-component/datagrid-component.module';
import { DxDropDownButtonModule } from 'devextreme-angular';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CccTreelistComponent } from './_ccc-components/ccc-treelist/ccc-treelist.component';
import { TreeListComponent } from './_layout/_secs/tree-list/tree-list.component';
import { DropdownSearchComponent } from './_layout/_secs/dropdown-search/dropdown-search.component';
import { CccDropdownSearchModule } from "./_ccc-components/ccc-dropdown-search/ccc-dropdown-search.module";

@NgModule({
  declarations: [
    AppComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    BodyModule,
    FormsComponentsModule,
    DatagridComponentModule,
    DxDropDownButtonModule,
    CccDropdownSearchModule
],
  providers: [
    provideAnimationsAsync('noop')
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
