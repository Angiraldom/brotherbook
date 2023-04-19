import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

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
    fbq('track', 'Ver contenido', { evento: "Click al botón 'quiero leerlo'" });
  }

}
