import { Routes } from "@angular/router"
import { ProductListComponent } from "../product-list/product-list.component";

export default [
    { path: '', component: ProductListComponent },
    {path: 'product/:id',
        loadComponent: () => import('../product-detail/product-detail.component')
    },
] as Routes;