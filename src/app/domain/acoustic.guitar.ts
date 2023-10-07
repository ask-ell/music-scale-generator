import Guitar from "./guitar";
import { NoteKey, TuningNoteConfigList } from "./types";

export default class AcousticGuitar extends Guitar {
    constructor() {
        const tuningNoteConfigList: TuningNoteConfigList = [
            {
                noteKey: NoteKey.MI,
                octave: 1
            },
            {
                noteKey: NoteKey.LA,
                octave: 1,
            },
            {
                noteKey: NoteKey.RE,
                octave: 2,
            },
            {
                noteKey: NoteKey.SOL,
                octave: 2
            },
            {
                noteKey: NoteKey.SI,
                octave: 2,
            },
            {
                noteKey: NoteKey.MI,
                octave: 3
            }
        ];
        const nbrFrets = 19;
        super(tuningNoteConfigList, nbrFrets);
    }
}