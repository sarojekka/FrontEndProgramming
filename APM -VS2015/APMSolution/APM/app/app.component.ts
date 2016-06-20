﻿import {Component} from 'angular2/core';
import {ProductListComponent} from './products/product-list.component';

@Component({
    selector: 'pm-app',
    template: `
    <div>
        <h1>{{pageTitle}}</h1>
        <pm-products>Loading Product List.... </pm-products>
    </div>
    `,
    directives: [ProductListComponent] 
})
export class AppComponent {
    pageTitle:String = 'Saroj Acme Product Managemnet';
}