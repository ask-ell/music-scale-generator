import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { AcousticGuitar, DO_MAJOR_SCALE, DO_MINOR_SCALE, Scale } from '@_app/domain';

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
  scaleNames = [
    DO_MAJOR_SCALE.name,
    DO_MINOR_SCALE.name
  ];

  guitarDataView?: GuitarDataView;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.guitarViewForm.valueChanges.subscribe(({ scaleName }) => {
      this.onGuitarViewScaleNameChange(scaleName);
    });
    this.guitarViewForm.setValue({ scaleName: DO_MAJOR_SCALE.name });
  }

  private onGuitarViewScaleNameChange(scaleName: string) {
    const scale: Scale = getScaleFromName(scaleName);
    this.guitarDataView = GuitarDataViewFactory.create(guitar, scale);
    this.changeDetectorRef.markForCheck();
  }
}
