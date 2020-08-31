import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-game',
    templateUrl: './page.html',
    styleUrls: [ './page.scss' ],
})
export class Demo1Page implements OnInit {

    demo = '1';

    constructor() {
        console.log('Demo1Page::constructor | ');
    }

    ngOnInit() {
        console.log('Demo1Page::ngOnInit |');
    }
}