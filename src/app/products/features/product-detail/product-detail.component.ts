import { Component, effect, inject, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailStateService } from '../../data-access/product.detail.state.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styles: ``,
})
export default class ProductDetailComponent {
addToCart() {
throw new Error('Method not implemented.');
}

  productDetailState = inject(ProductDetailStateService).state
  
  id = input.required<string>();

  constructor() {
    effect(() => {
      console.log(this.id());
      this.productDetailState.getById(this.id())
    })
  }
}
