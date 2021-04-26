import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from "sweetalert2";
import { DashService } from '../dash.service';
@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  public form_books: FormGroup;
  public loading: boolean = false;
  public submitted: boolean = false;
  public libros = [];
  public id: number;

  constructor(private service: DashService, private form_builder: FormBuilder) {}
  ngOnInit() {
    this.form_books = this.form_builder.group({
      name: ["", Validators.compose([Validators.required])],
      autor: ["", Validators.compose([Validators.required])]
    });
    this.getBooks();
  }

  getBooks() {
    this.service.getBooks().subscribe((res:any) => {
      this.libros = res;
    });
  }
  existe() {
    if (this.id) {
      this.actualizar();
    } else {
      this.registrarBook();
    }
  }

  limpiar() {
    this.id = null;
    this.form_books.reset();
  }

  registrarBook() {
    if (this.form_books.valid) {
      this.service.postBooks(this.form_books.value).subscribe(res => {
        this.limpiar();
        this.getBooks();
      });
    } else {
      console.log("validado");
      Swal.fire({
        title: "Validado",
        text: "Los campos son requeridos",
        icon: "info",
        confirmButtonText: "Sí",
        reverseButtons: true
      })
    }
  }

  editar(item: any) {
    this.id = item.id;
    this.form_books.controls["name"].setValue(item.nombre);
    this.form_books.controls["autor"].setValue(item.autor);
  }

  actualizar() {
    Swal.fire({
      title: "Editar",
      text: "¿Desea editar el registro?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí",
      cancelButtonText: "No",
      reverseButtons: true
    }).then(result => {
      if (result.value) {
        this.service.putBooks(this.id, this.form_books.value).subscribe(res => {
          this.limpiar();
          this.getBooks();
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.limpiar();
      }
    });
  }

  eliminar(id: number) {
    Swal.fire({
      title: "Elimanr",
      text: "¿Desea eliminar el registro?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí",
      cancelButtonText: "No",
      reverseButtons: true
    }).then(result => {
      if (result.value) {
        this.service.deleteBooks(id).subscribe(res => {
          this.limpiar();
          this.getBooks();
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    });
  }

  get f() {
    return this.form_books.controls;
  }
}
