import { Component } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {ISeller} from './ViewModel/User';
import {SellerService} from './Service/seller.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'seller_';
 // Users: Observable<Seller[]>;
Seller:Observable<ISeller[]>;
  constructor(firestore: Firestore, sellerService:SellerService) {
    this.Seller=sellerService.getAlluser()
  }
}
