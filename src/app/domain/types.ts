import NotesList from "./notes-list";

export enum NoteKeys {
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

export type TuningNoteConfig = {
    noteKey: NoteKeys,
    octave: number;
}

export type Rope = NotesList;

export type TuningNoteConfigList = Array<TuningNoteConfig>;