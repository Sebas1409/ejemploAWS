import { Routes } from "@angular/router";
import { DashComponent } from "./dash/dash.component";
import { Form1Component } from './dash/form1/form1.component';
import { Form2Component } from './dash/form2/form2.component';
import { ListadoImagenesComponent } from './dash/listado-imagenes/listado-imagenes.component';

export const route:Routes=[
    {path:'', component:DashComponent, children:[
        {path:'form1' , component:Form1Component},
        {path:'form2' , component:Form2Component},
        {path:'imagenes' , component:ListadoImagenesComponent},
    ]}
]