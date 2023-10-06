import { Component } from '@angular/core';

import { AcousticGuitar } from '@_app/domain';

@Component({
  templateUrl: './guitar.component.html',
  styleUrls: ['./guitar.component.scss']
})
export class GuitarComponent {
  guitar = new AcousticGuitar();
}
