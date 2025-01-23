import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product.type';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  serverIsUp = signal(false);

  productService = inject(ProductsService);

  products = signal<Array<Product>>([]);

  ngOnInit(): void {
    // Subscribing to the product service to fetch data
    this.productService.getProductsFromBackend().subscribe({
      next: (prods) => {
        this.products.set(prods); // Update the product signal
        this.serverIsUp.set(true); // Mark server as up
      },
      error: (err) => {
        console.error('Failed to fetch products:', err); // Log errors for debugging
        this.serverIsUp.set(false); // Ensure server status reflects failure
      },
    });
  }
}

