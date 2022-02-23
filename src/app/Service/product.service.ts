import { Firestore, collectionData, collection,collectionGroup, where,query } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {IProduct} from '../ViewModel/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
Product:Observable<IProduct[]>;
  constructor(private firestore: Firestore) { 
    const collectionseller:any = collection(firestore, 'Products');
    this.Product = collectionData(collectionseller);
  }

  
  getAllproduct(): Observable<IProduct[]>{
    const collectionseller:any = collection(this.firestore, 'Products');
     this. Product = collectionData(collectionseller);
     return this. Product
  }
}
