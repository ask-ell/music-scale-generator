import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { checkDataIsDefinedAndNotNull } from '@_app/core';
import { ACOUSTIC_GUITAR, SCALES, Scale, ScaleName, getScaleFromName, parseScaleName } from '@_app/domain';

import { GuitarControllerRawValue, GuitarDataView } from './types';
import GuitarDataViewFactory from './guitar.data-view.factory';
import { GuitarController } from './guitar.controller';

@Component({
  templateUrl: './guitar.component.html',
  styleUrls: ['./guitar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class GuitarComponent implements OnInit {
  guitarController = new GuitarController();
  scaleNames: string[] = SCALES.map(scale => scale.name);

  guitarDataView?: GuitarDataView;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.guitarController.valueChanges.subscribe(this.onGuitarViewFormChanges.bind(this));
    this.guitarController.setValue({ scaleName: ScaleName.DO_M });
  }

  private onGuitarViewFormChanges({ scaleName }: GuitarControllerRawValue): void {
    const definedScaleName: string = checkDataIsDefinedAndNotNull(scaleName);
    const parsedScaleName: ScaleName = parseScaleName(definedScaleName);
    this.onScaleNameChange(parsedScaleName);
  }

  private onScaleNameChange(scaleName: ScaleName): void {
    const scale: Scale = getScaleFromName(scaleName);
    this.guitarDataView = GuitarDataViewFactory.create(ACOUSTIC_GUITAR, scale);
    this.changeDetectorRef.markForCheck();
  }
}
