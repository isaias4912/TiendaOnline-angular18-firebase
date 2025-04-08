import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from './firebase.service';
import { signInWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token:string|null=null;

  constructor(
    private router: Router,
    private firebaseService: FirebaseService
  ) { }

  login(email: string,password:string){
    const auth= this.firebaseService.auth;

    signInWithEmailAndPassword(auth,email, password)
    .then(()=>{
      auth.currentUser?.getIdToken().then((token)=>{
        this.token = token;
        this.router.navigate(['/']);
      })
  
    })
    .catch((error)=>{
      console.error('error al iniciar sesion',error)
    })
  }
   getIdToken(){
    return this.token;
   }

   //verifica si el usuario esta autentificado
   isAutenticado(){
    return this.token !=null;

   }
   //metodo para cerrar sesion
   logout(){
    const auth=this.firebaseService.auth;
    auth.signOut()
    .then(()=>{
      this.token=null;//resetea el token al cerra sesion
      this.router.navigate(['login']);//redirecciona a la pagina login
    })
    .catch((error)=>console.error('error logout',error));
    

   }


}
