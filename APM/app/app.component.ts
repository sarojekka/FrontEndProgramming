import {Component} from 'angular2/core';
import {ProductListComponent} from './products/product-list.component';
import {ProductService} from './products/product.service';

@Component({
    selector: 'pm-app',
    template: `
    <div>
        <h1> {{pageTitle}} </h1> 
        <pm-products>Loading Product List.... </pm-products>
    </div>`,
    directives: [ProductListComponent],
    providers: [ProductService]

})
export class AppComponent{
    pageTitle: string =  'Saroj Acme Product Management';
}