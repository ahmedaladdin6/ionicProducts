import { Component } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';

export interface IProducts {
  id: number
  price: number
  name_ar: string
  calories: number
  image: string
  display: false;
}


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  numberOfItemsCart =0
  categories
  selectProduct
  categoryActive = null
  products
  loading: boolean = false;
  constructor(private _productsServices: ProductsService) {
    this.getAllCategories(0, 30)
  }

 


  getAllCategories(start, limit) {
    this.loading = true
    this._productsServices.getAllCategories(start, limit).subscribe((res: any) => {
      console.log('res', res.result);
      this.categories = res.result
    }
      , () => {
        this.loading = false
      }
      , () => {
        this.loading = false;
        this.defaultSelectedCategory(this.categories[0].id)
      }
    )
  }

  defaultSelectedCategory(firstCategoryID) {
    this.selectedCategory(firstCategoryID)
  }


  getAllProduct_Of_SelectedCategory(categoryID) {
    let selectedCategory = this.categories.filter(res => res.id == categoryID)
    this.products = selectedCategory[0].products;
    console.log(selectedCategory);

  }

  addToCart(product) {
    this.selectProduct = product

  }


  selectedCategory(categoryID) {
    this.categoryActive = categoryID;
    this.getAllProduct_Of_SelectedCategory(categoryID)
  }


  numberOfItems(e){
console.log(e);
this.numberOfItemsCart = e

  }
}
