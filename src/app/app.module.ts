import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { routing } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { FormsModule ,ReactiveFormsModule  } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { CommonModule } from '@angular/common';
import { SharedComponentModule } from './shared.module';

import { AppComponent } from './app.component';
import { DepartmentModule } from './department/department.module';
import { HomeComponent } from './home/home.component';
// import { DepartmentModule } from './departmentDetail/departmentDetail.module';
import { DialogModule, DataTableModule, SharedModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/components/accordion/accordion';
import { MenuItem } from 'primeng/components/common/api';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NbThemeModule } from '@nebular/theme';
import { CalendarModule } from 'primeng/primeng';
import { DataSharedService } from './data.service';
import { DepartmentDetailComponent } from './departmentDetail/departmentDetail.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DepartmentDetailComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    DataTableModule,
    SharedModule,
    NgbModule.forRoot(),
    NbThemeModule.forRoot({ name: 'default' }),
    BrowserAnimationsModule,
    FormsModule,
    AccordionModule,
    DepartmentModule,
    SharedComponentModule,
    ButtonModule,
    routing,
    DialogModule,
    CommonModule,
    CalendarModule,
    DepartmentModule,
    // FormsModule,
    // ReactiveFormsModule
  ],
  providers: [Http,
    DataSharedService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]

})
export class AppModule { }
