import { Injectable } from '@angular/core';
import { NgxsModule, Action, Selector, State, StateContext } from '@ngxs/store';
import { CartStateModel } from './cart-state-model';
import { AddProductToCart, DelProductFromCart } from '../actions/cart.action';
import { Cart } from '../models/cart';
import { Product } from '../models/product';

@State<CartStateModel>({
  name: 'products',
  defaults: {
    products: [],
  },
})
@Injectable()
export class CartState {
  @Selector()
  static getProductsNb(state: CartStateModel): number {
    console.log(state.products);
    return state.products.length;
  }

  @Selector()
  static getProductsFromCart(state: CartStateModel): Product[] {
    return state.products;
  }

  @Action(AddProductToCart)
  add(
    { getState, patchState }: StateContext<CartStateModel>,
    { payload }: AddProductToCart
  ) {
    const state = getState();
    patchState({
      products: [...state.products, payload],
    });
  }

  @Action(DelProductFromCart)
  del(
    { getState, patchState }: StateContext<CartStateModel>,
    { payload }: DelProductFromCart
  ) {
    const state = getState();
    patchState({
      products: [...state.products.filter((t) => t.id != payload.id)],
    });
  }
}
