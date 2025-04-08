import { Injectable } from '@angular/core';
import { Producto } from './producto/producto.model';
import { DatosService } from './datos.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

 
  productos:{[llave:string]:Producto}={};

  productosActualizados=new Subject<{[llave:string]:Producto}>();

  constructor(private datosservice:DatosService){}

  listarProductos(){
    return this.datosservice.listarProductos();
  }

 
 //agregar o modificar un producto existente
  guardarProducto(producto: Producto,llave:string | null=null) {
    if(llave===null){
    //caso agregar
    this.datosservice.agregarProducto(producto).subscribe(()=>{
      this.refrescarProductos();
    });
    
  }else{
    //caso actualizar
    this.datosservice.modificarProductos(producto,llave).subscribe(()=>{
      this.refrescarProductos();
    });
  }
  }

  private refrescarProductos(){
    this.listarProductos().subscribe((productos:{[llave:string]:Producto})=>{
      this.setProductos(this.productos);
    });
  }
  setProductos(productos:{[llave:string]:Producto}){
    this.productos=productos;
    this.productosActualizados.next(this.productos);//emitir la actualizacion de la lista
  }
  

  getProductoByLlave(llave:string):Producto| undefined{
    return this.productos[llave];
    // return this.productos.find(producto=>producto.id===id);
  }

  eliminarProducto(llave:string){
    this.datosservice.eliminarproducto(llave).subscribe(()=>{
      this.refrescarProductos();
    });

  
  }

}
