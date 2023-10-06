import { Component } from '@angular/core';

import { AcousticGuitar, DO_SCALE, NoteKeys, Note } from '@_app/domain';

type GuitarDataView = {
  active: boolean,
  noteKey: NoteKeys
}[][];

const guitar = new AcousticGuitar();

function isActive(note: Note): boolean {
  return DO_SCALE.some(noteKey => noteKey === note.noteKey);
}

const guitarDataView: GuitarDataView = guitar.notesByRope.map(notes => notes.map(note => ({ noteKey: note.noteKey, active: isActive(note) })));

@Component({
  templateUrl: './guitar.component.html',
  styleUrls: ['./guitar.component.scss']
})
export class GuitarComponent {
  guitarDataView = guitarDataView;
}
