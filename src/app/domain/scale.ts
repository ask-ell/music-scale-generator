import { NoteKeys } from "./types";

export default class Scale {
    private noteKeys: NoteKeys[];

    constructor(readonly name: string, noteKeys: NoteKeys[]) {
        this.noteKeys = noteKeys;
    }

    has(noteKey: NoteKeys): boolean {
        return this.noteKeys.some(_noteKey => _noteKey === noteKey);
    }
}