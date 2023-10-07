import { NoteKeys } from "@_app/domain";

type NoteInformation = {
    active: boolean,
    octave: number,
    noteKey: NoteKeys
};
type GuitarDataViewRope = NoteInformation[];
export type GuitarDataView = GuitarDataViewRope[];