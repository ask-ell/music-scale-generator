import Guitar from "./guitar";
import { NoteKey, TuningNoteConfigList } from "./types";

describe(Guitar.name, () => {
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
    const guitar = new Guitar(tuningNoteConfigList, nbrFrets);

    const assertionValues = [
        {
            firstNote: {
                noteKey: NoteKey.MI,
                octave: 1
            },
            lastNote: {
                noteKey: NoteKey.SI,
                octave: 2
            }
        },
        {
            firstNote: {
                noteKey: NoteKey.LA,
                octave: 1
            },
            lastNote: {
                noteKey: NoteKey.MI,
                octave: 3
            }
        },
        {
            firstNote: {
                noteKey: NoteKey.RE,
                octave: 2
            },
            lastNote: {
                noteKey: NoteKey.LA,
                octave: 3
            }
        },
        {
            firstNote: {
                noteKey: NoteKey.SOL,
                octave: 2
            },
            lastNote: {
                noteKey: NoteKey.RE,
                octave: 4
            }
        },
        {
            firstNote: {
                noteKey: NoteKey.SI,
                octave: 2
            },
            lastNote: {
                noteKey: NoteKey.FA_DIESE,
                octave: 4
            }
        },
        {
            firstNote: {
                noteKey: NoteKey.MI,
                octave: 3
            },
            lastNote: {
                noteKey: NoteKey.SI,
                octave: 4
            }
        }
    ];

    assertionValues.forEach(({ firstNote, lastNote }, ropeIndex) => {
        describe(`Rope ${ropeIndex + 1}`, () => {
            it(`Should the first note be "${firstNote.noteKey}" at octave ${firstNote.octave}`, () => {
                expect(guitar.ropes[ropeIndex][0].noteKey).toBe(firstNote.noteKey);
                expect(guitar.ropes[ropeIndex][0].octave).toBe(firstNote.octave);
            });

            it(`Should the last note be "${lastNote.noteKey}" at octave ${lastNote.octave}`, () => {
                expect(guitar.ropes[ropeIndex][guitar.nbrFrets].noteKey).toBe(lastNote.noteKey);
                expect(guitar.ropes[ropeIndex][guitar.nbrFrets].octave).toBe(lastNote.octave);
            });
        })
    });
});