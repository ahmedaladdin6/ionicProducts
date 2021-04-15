import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
   url = environment.url
   token ='ay5t9Xh4hmAXSUEBby9j9dSAxjNCtnrFKp6x9YqG43JaXbpHESvHsP9G4vCg'

  constructor(private http :HttpClient) { }

  getAllProducts(start:number,limit:number) {
    return this.http.get(`${this.url}/get_all_products?token=${this.token}&start=${start}&limit=${limit}`);
  }

  getAllCategories(start:number,limit:number){
    return this.http.get(`${this.url}/get_all_categories?token=${this.token}&start=${start}&limit=${limit}`);

  }
}
