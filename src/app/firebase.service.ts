import {  Injectable } from '@angular/core';
import{initializeApp}from 'firebase/app';
import{Auth,getAuth}from 'firebase/auth';
import{Firestore,getFirestore}from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  firebaseConfig = {
    apiKey: "AIzaSyD_AUxNqs4B3VetKHp3wP6ZPYigyZ3j96c",
    authDomain: "tienda-online-97ac7.firebaseapp.com",
    databaseURL: "https://tienda-online-97ac7-default-rtdb.firebaseio.com",
    projectId: "tienda-online-97ac7",
    storageBucket: "tienda-online-97ac7.firebasestorage.app",
    messagingSenderId: "900011797349",
    appId: "1:900011797349:web:60281c57ff4e53b098cf8c"
  };

  public auth: Auth;
  public firebase: Firestore;

  constructor() { 
    const app= initializeApp(this.firebaseConfig);
    this.auth=getAuth(app);
    this.firebase=getFirestore(app);
  }
}
