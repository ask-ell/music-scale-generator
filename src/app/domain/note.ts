import { NoteKeys } from "./types";

export default class Note {
    constructor(readonly noteKey: NoteKeys, readonly octave: number) { }
}