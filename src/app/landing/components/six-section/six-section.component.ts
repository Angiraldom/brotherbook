import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalSuscribeComponent } from 'src/app/shared/components/modal-suscribe/modal-suscribe.component';

declare let fbq:Function;

@Component({
  selector: 'app-six-section',
  templateUrl: './six-section.component.html',
  styleUrls: ['./six-section.component.scss']
})
export class SixSectionComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openModal() {
    fbq('track', 'Completar registro', { evento: "Click al botón 'suscribirme'" });
    this.dialog.open(ModalSuscribeComponent, {
      panelClass: "custom-modal",
      maxWidth: "95%"
    });
  }

}
