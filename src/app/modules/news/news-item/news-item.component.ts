import {AfterViewInit, ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";


@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css'],
  animations: [

  ]
})
export class NewsItemComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() data:any;
  @Input() delay:number;

  constructor(private cdr: ChangeDetectorRef) {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    //this.cdr.detectChanges();
  }

  ngOnDestroy(){

  }

}
