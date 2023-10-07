import { Guitar, Scale } from "@_app/domain";

import { GuitarDataView } from "./types";

export default class GuitarDataViewFactory {
    static create(guitar: Guitar, scale: Scale): GuitarDataView {
        return guitar.ropes.map(notes => notes.map(note => ({
            noteKey: note.noteKey,
            octave: note.octave,
            active: scale.has(note.noteKey)
        })));
    }
}