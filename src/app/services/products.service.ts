import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../models/product.type';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  http = inject(HttpClient);

  getProductsFromBackend() {
    const url = "http://localhost:8080/api/products";
    return this.http.get<Array<Product>>(url);
  }

  constructor() { }
}
