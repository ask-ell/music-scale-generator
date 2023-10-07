import { NoteKey, NoteKeys } from "./types";

export default class Scale {
    constructor(readonly name: string, private noteKeys: NoteKeys) { }

    has(noteKey: NoteKey): boolean {
        return this.noteKeys.some(_noteKey => _noteKey === noteKey);
    }
}