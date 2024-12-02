import { Component, input, output } from '@angular/core';
import { Product } from '../../../shared/interfaces/product.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product-card.component.html',
  styles: ``
})
export class ProductCardComponent {
  product = input.required<Product>();

  addToCart = output<Product>();

  add(event: Event) {
    event.stopPropagation()
    event.preventDefault()
    this.addToCart.emit(this.product());
  }
}
