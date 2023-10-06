import { NoteKeys } from "./types";

export default class Note {
    constructor(readonly noteKey: NoteKeys, readonly octave: number) { }

    isKey(noteKey: NoteKeys): boolean {
        return this.noteKey === noteKey;
    }
}