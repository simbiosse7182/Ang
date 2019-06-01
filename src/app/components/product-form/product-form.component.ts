import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  constructor(private productService: ProductsService, private fb: FormBuilder) {
  }

  productForm = this.fb.group({
    name: ['', Validators.required],
    imageUrl: ['', Validators.required]
  });

  onSubmit() {
    this.productService.addData(this.productForm.value.name, this.productForm.value.imageUrl);
    // Почему-то после сброса значения, валидатор ругается (скорее всего, я что то не так делаю)
    this.productForm.reset();
  }

  ngOnInit() {
  }

}
