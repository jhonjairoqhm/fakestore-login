import { Injectable } from "@angular/core";
import { ProductItemCart, Product } from "../interfaces/store.interfaces";
import { Observable, of } from "rxjs";

@Injectable ({
    providedIn: 'root',
})
export class StorageService {
    loadProducts(): Observable<ProductItemCart[]> {
        const rawProduct = localStorage.getItem('products');
        return of(rawProduct ? JSON.parse(rawProduct) : []);
    }
      
    saveProducts(products: ProductItemCart[]): void {
        localStorage.setItem('products', JSON.stringify(products));
    }
      
}