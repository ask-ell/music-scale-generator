import Guitar from "./guitar";
import { NoteKeys, TuningNoteConfigList } from "./types";

export default class AcousticGuitar extends Guitar {
    constructor() {
        const tuningNoteConfigList: TuningNoteConfigList = [
            {
                noteKey: NoteKeys.MI,
                octave: 1
            },
            {
                noteKey: NoteKeys.LA,
                octave: 1,
            },
            {
                noteKey: NoteKeys.RE,
                octave: 2,
            },
            {
                noteKey: NoteKeys.SOL,
                octave: 2
            },
            {
                noteKey: NoteKeys.SI,
                octave: 2,
            },
            {
                noteKey: NoteKeys.MI,
                octave: 3
            }
        ];
        const nbrFrets = 19;
        super(tuningNoteConfigList, nbrFrets);
    }
}