import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  art = {
    codigo: 0,
    descripcion: '',
    precio: 0,
  };

  articulos = [{ codigo: 1, descripcion: 'papas', precio: 15.0 }];

  registros() {
    return this.articulos.length > 0;
  }

  borrar(codigo: number) {
    for (let i = 0; i < this.articulos.length; i++) {
      if (confirm('¿Deseas eliminar el articulo?')) {
        if (this.articulos[i].codigo == codigo) {
          this.articulos.splice(i, 1);
          return;
        }
      }
    }
  }

  seleccionar(art: { codigo: number; descripcion: string; precio: number }) {
    this.art.codigo = art.codigo;
    this.art.descripcion = art.descripcion;
    this.art.precio = art.precio;
  }

  agregar() {
    if (this.art.codigo == 0) {
      return alert('El codigo no puede ser 0');
    }

    for (let i = 0; i < this.articulos.length; i++)
      if (this.articulos[i].codigo == this.art.codigo) {
        return alert('Ya existe un articulo con ese codigo');
      }

    this.articulos.push({
      codigo: this.art.codigo,
      descripcion: this.art.descripcion,
      precio: this.art.precio,
    });

    this.art.codigo = 0;
    this.art.descripcion = '';
    this.art.precio = 0;
  }

  modificar() {
    for (let i = 0; i < this.articulos.length; i++) {
      if (this.articulos[i].codigo == this.art.codigo) {
        this.articulos[i].descripcion = this.art.descripcion;
        this.articulos[i].precio = this.art.precio;
        this.art.codigo = 0;
        this.art.descripcion = '';
        this.art.precio = 0;
        return;
      } else {
        return alert('No existe el producto');
      }
    }
  }
}
