import Note from "./note";
import NotesList from "./notes-list";
import { NoteKeys, TuningNoteConfig } from "./types";

export default class Guitar {
    readonly notesByRope = new Array<NotesList>();

    constructor(tuningNoteConfigList: TuningNoteConfig[], readonly nbrFrets: number) {
        const noteKeysValues = Object.values(NoteKeys);
        const nbrRopes = tuningNoteConfigList.length;

        for (let ropeIndex = 0; ropeIndex < nbrRopes; ropeIndex++) {
            const tuningNoteConfig = tuningNoteConfigList[ropeIndex];
            let octave = tuningNoteConfig.octave;
            const firstNoteOfRope = new Note(tuningNoteConfig.noteKey, octave);

            const isTheLastNoteKey = tuningNoteConfig.noteKey === NoteKeys.SI;
            if (isTheLastNoteKey) {
                octave++;
            }

            const ropeNotes = new NotesList();
            ropeNotes.push(firstNoteOfRope);

            let lastNoteKeyIndex = noteKeysValues.findIndex(noteKey => noteKey === tuningNoteConfig.noteKey);

            for (let fretIndex = 0; fretIndex < nbrFrets; fretIndex++) {
                const noteKeyIndex = lastNoteKeyIndex === noteKeysValues.length - 1 ? 0 : lastNoteKeyIndex + 1;
                lastNoteKeyIndex = noteKeyIndex;

                const noteKey = noteKeysValues[noteKeyIndex];
                const note = new Note(noteKey, octave);

                const isTheLastNoteKey = noteKeyIndex === noteKeysValues.length - 1;
                if (isTheLastNoteKey) {
                    octave++;
                }

                ropeNotes.push(note);
            }

            this.notesByRope.push(ropeNotes);
        }
    }
}