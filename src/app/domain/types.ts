import NotesList from "./notes-list";

export enum NoteKey {
    DO = 'DO',
    DO_DIESE = 'DO#',
    RE = 'RE',
    RE_DIESE = 'RE#',
    MI = 'MI',
    FA = 'FA',
    FA_DIESE = 'FA#',
    SOL = 'SOL',
    SOL_DIESE = 'SOL#',
    LA = 'LA',
    LA_DIESE = 'LA#',
    SI = 'SI',
}

export enum ScaleName {
    DO_M = 'Do M',
    DO_m = 'Do m'
}

export type NoteKeys = NoteKey[];

export type TuningNoteConfig = {
    noteKey: NoteKey,
    octave: number;
}

export type Rope = NotesList;

export type TuningNoteConfigList = Array<TuningNoteConfig>;