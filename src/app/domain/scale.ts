import { NoteKey, NoteKeys, ScaleName } from "./types";

export default class Scale {
    constructor(readonly name: ScaleName, private noteKeys: NoteKeys) { }

    has(noteKey: NoteKey): boolean {
        return this.noteKeys.some(_noteKey => _noteKey === noteKey);
    }
}