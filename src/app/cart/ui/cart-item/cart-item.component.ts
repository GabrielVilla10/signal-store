import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductItemCart } from '../../../shared/interfaces/product.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() productCartItem!: ProductItemCart;

  @Output() onRemove = new EventEmitter<number>();

  @Output() onIncrease = new EventEmitter<ProductItemCart>();

  @Output() onDecrease = new EventEmitter<ProductItemCart>();
state: any;

  remove() {
    this.onRemove.emit(this.productCartItem.product.id);
  }

  increase() {
    this.onIncrease.emit(this.productCartItem);
  }

  decrease() {
    this.onDecrease.emit(this.productCartItem);
  }
}
