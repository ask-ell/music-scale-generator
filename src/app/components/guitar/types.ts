import { MaybeNull } from "@_app/core";
import { NoteKey } from "@_app/domain";

type NoteDataView = {
    active: boolean,
    octave: number,
    noteKey: NoteKey
};

type RopeDataView = NoteDataView[];

export type GuitarDataView = RopeDataView[];

export type GuitarControllerRawValue = Partial<{
    scaleName: MaybeNull<string>;
}>;