import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

declare let gtag:Function;
declare let fbq:Function;

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.scss']
})
export class FirstSectionComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  desplace(id: string) {
    this.viewportScroller.scrollToAnchor(id);
    fbq('track', 'Purchase', {currency: "USD", value: 30.00});
  }

}
