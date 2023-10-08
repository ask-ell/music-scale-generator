import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import GuitarRoutingModule from './guitar-routing.module';
import GuitarComponent from './guitar.component';

@NgModule({
  declarations: [
    GuitarComponent
  ],
  imports: [
    CommonModule,
    GuitarRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export default class GuitarModule { }
