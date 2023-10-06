import { NoteKeys } from "@_app/domain";

type NoteInformation = {
    active: boolean,
    noteKey: NoteKeys
};
type GuitarDataViewRope = NoteInformation[];
export type GuitarDataView = GuitarDataViewRope[];