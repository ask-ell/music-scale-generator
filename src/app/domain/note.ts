import { NoteKey } from "./types";

export default class Note {
    constructor(readonly noteKey: NoteKey, readonly octave: number) { }

    isKey(noteKey: NoteKey): boolean {
        return this.noteKey === noteKey;
    }
}