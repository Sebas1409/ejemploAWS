import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { ListadoImagenesComponent } from './listado-imagenes/listado-imagenes.component';
import { ImagenesService } from './listado-imagenes/imagenes.service';



@NgModule({
  declarations: [DashComponent, HeaderComponent, Form1Component, Form2Component, ListadoImagenesComponent],
  imports: [
    CommonModule,RouterModule
  ],
  providers:[ImagenesService]
})
export class DashModule { }
