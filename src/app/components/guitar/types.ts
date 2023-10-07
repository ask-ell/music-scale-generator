import { NoteKey } from "@_app/domain";

type NoteInformation = {
    active: boolean,
    octave: number,
    noteKey: NoteKey
};
type GuitarDataViewRope = NoteInformation[];
export type GuitarDataView = GuitarDataViewRope[];