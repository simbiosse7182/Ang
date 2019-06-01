import {Injectable} from '@angular/core';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private data: Product[] = [];

  getData(): Product[] {
    return this.data;
  }

  addData(name, imageUrl): void {
    this.data.push(new Product(this.data.length, name, imageUrl));
    console.log(this.data);
  }
}
