import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from './producto/producto.model';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  url='https://tienda-online-97ac7-default-rtdb.firebaseio.com/';

  constructor(private httpClient : HttpClient,
    private loginService: LoginService
  ) { }

  listarProductos(): Observable<{[llave:string]:Producto}>{
    const token = this.loginService.getIdToken();
    const url_listar=`${this.url}datos.json?auth=${token}`;
    return this.httpClient.get<{[llave:string]:Producto}>(url_listar);
  }
  agregarProducto(producto:Producto):Observable<any>{
    const token = this.loginService.getIdToken();
    //aqui se genera el valor de la llave de manera automatica
    const url_agregar=`${this.url}datos.json?auth=${token}`;
    return this.httpClient.post(url_agregar,producto);
  }
  modificarProductos(producto:Producto,llave:string):Observable<any>{
    const token = this.loginService.getIdToken();
    const url_modificar=`${this.url}datos/${llave}.json?auth=${token}`;
    return this.httpClient.put(url_modificar,producto);
  }
  eliminarproducto(llave:string):Observable<any>{
    const token = this.loginService.getIdToken();
    const url_eliminar=`${this.url}datos/${llave}.json?auth=${token}`;
    return this.httpClient.delete(url_eliminar);
  }
}

