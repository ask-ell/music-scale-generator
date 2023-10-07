import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { AcousticGuitar, SCALES, Scale } from '@_app/domain';

import { GuitarDataView } from './types';
import GuitarDataViewFactory from './guitar.data-view.factory';
import { getScaleFromName } from './utils';

const guitar = new AcousticGuitar();

@Component({
  templateUrl: './guitar.component.html',
  styleUrls: ['./guitar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuitarComponent implements OnInit {
  guitarViewForm = new FormGroup({
    scaleName: new FormControl()
  });
  scaleNames: string[] = SCALES.map(scale => scale.name);

  guitarDataView?: GuitarDataView;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.guitarViewForm.valueChanges.subscribe(({ scaleName }) => {
      this.onScaleNameChange(scaleName);
    });
    this.guitarViewForm.setValue({ scaleName: SCALES[0].name });
  }

  private onScaleNameChange(scaleName: string) {
    const scale: Scale = getScaleFromName(scaleName);
    this.guitarDataView = GuitarDataViewFactory.create(guitar, scale);
    this.changeDetectorRef.markForCheck();
  }
}
