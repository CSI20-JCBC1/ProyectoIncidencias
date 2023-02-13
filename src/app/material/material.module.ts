import { NgModule } from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const modulos = [
  MatButtonToggleModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule
];

@NgModule({
  imports: modulos,
  exports: modulos
})
export class MaterialModule { }