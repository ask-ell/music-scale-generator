import Note from "./note";
import Rope from "./rope";
import { NoteKeys, TuningNoteConfig } from "./types";

export default class Guitar {
    readonly ropes = new Array<Rope>();

    constructor(tuningNoteConfigList: TuningNoteConfig[], readonly nbrFrets: number) {
        const noteKeys = Object.values(NoteKeys);
        tuningNoteConfigList.forEach((tuningNoteConfig) => {
            let octave = tuningNoteConfig.octave;
            const firstNoteOfRope = new Note(tuningNoteConfig.noteKey, octave);
            const rope = new Rope();
            rope.push(firstNoteOfRope);

            if (firstNoteOfRope.isKey(NoteKeys.SI)) {
                octave++;
            }

            let lastNoteKeyIndex = noteKeys.findIndex(noteKey => noteKey === tuningNoteConfig.noteKey);

            for (let fretIndex = 0; fretIndex < nbrFrets; fretIndex++) {
                const noteKeyIndex = lastNoteKeyIndex === noteKeys.length - 1 ? 0 : lastNoteKeyIndex + 1;
                lastNoteKeyIndex = noteKeyIndex;

                const noteKey = noteKeys[noteKeyIndex];
                const note = new Note(noteKey, octave);

                if (note.isKey(NoteKeys.SI)) {
                    octave++;
                }

                rope.push(note);
            }

            this.ropes.push(rope);
        });
    }
}