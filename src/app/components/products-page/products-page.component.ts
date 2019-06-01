import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {


  constructor(private productService: ProductsService) {
  }

  productIsCreating = false;

  toggleCreatingProduct() {
    this.productIsCreating = !this.productIsCreating;
  }

  ngOnInit() {

  }

}
