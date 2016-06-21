﻿import {Component, OnChanges, Input, Output, EventEmitter} from 'angular2/core';
@Component({
    selector: 'sa-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }

    OnClick(): void {
        this.ratingClicked.emit(`This rating ${this.rating} clicked!`);
    }
}