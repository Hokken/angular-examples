import {AfterViewInit, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-news-set',
  templateUrl: './news-set.component.html',
  styleUrls: ['./news-set.component.css'],
  animations: [
    trigger("header-animation", [
      transition("void => *", [style({
        opacity:0,
        transform: "translate(50px, 0px)"
      }), animate("500ms ease-out")]),
      transition("* => void", [animate(500,style({
        opacity:0,
          transform: "translate(50px, 0px)"
        })
      )]
      )
    ])
  ]
})

export class NewsSetComponent implements OnInit, AfterViewInit {

  @Input() data:any;

  constructor(/*private cdr: ChangeDetectorRef*/) { }

  ngOnInit() {
      //console.log(this.viewState)
  }

  ngAfterViewInit() {
    //this.cdr.detectChanges();
  }


}
