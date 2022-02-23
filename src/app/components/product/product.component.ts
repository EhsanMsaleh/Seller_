import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../Service/product.service';
import {IProduct} from './../../ViewModel/Product';
import { Observable } from 'rxjs';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {
  Product:Observable<IProduct[]>;
  constructor(firestore: Firestore, prodService:ProductService) { 
    this.Product=prodService.getAllproduct();
  }

  ngOnInit(): void {
    
  }
 
}
