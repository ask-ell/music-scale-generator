import AcousticGuitar from "./acoustic.guitar";
import { NoteKeys } from "./types";

describe(AcousticGuitar.name, () => {
    const acousticGuitar = new AcousticGuitar();

    const assertionValues = [
        {
            firstNote: {
                noteKey: NoteKeys.MI,
                octave: 1
            },
            lastNote: {
                noteKey: NoteKeys.SI,
                octave: 2
            }
        },
        {
            firstNote: {
                noteKey: NoteKeys.LA,
                octave: 1
            },
            lastNote: {
                noteKey: NoteKeys.MI,
                octave: 3
            }
        },
        {
            firstNote: {
                noteKey: NoteKeys.RE,
                octave: 2
            },
            lastNote: {
                noteKey: NoteKeys.LA,
                octave: 3
            }
        },
        {
            firstNote: {
                noteKey: NoteKeys.SOL,
                octave: 2
            },
            lastNote: {
                noteKey: NoteKeys.RE,
                octave: 4
            }
        },
        {
            firstNote: {
                noteKey: NoteKeys.SI,
                octave: 2
            },
            lastNote: {
                noteKey: NoteKeys.FA_DIESE,
                octave: 4
            }
        },
        {
            firstNote: {
                noteKey: NoteKeys.MI,
                octave: 3
            },
            lastNote: {
                noteKey: NoteKeys.SI,
                octave: 4
            }
        }
    ];

    assertionValues.forEach(({ firstNote, lastNote }, ropeIndex) => {
        describe(`Rope ${ropeIndex + 1}`, () => {
            it(`Should the first note be "${firstNote.noteKey}" at octave ${firstNote.octave}`, () => {
                expect(acousticGuitar.notesByRope[ropeIndex][0].noteKey).toBe(firstNote.noteKey);
                expect(acousticGuitar.notesByRope[ropeIndex][0].octave).toBe(firstNote.octave);
            });

            it(`Should the last note be "${lastNote.noteKey}" at octave ${lastNote.octave}`, () => {
                expect(acousticGuitar.notesByRope[ropeIndex][acousticGuitar.nbrFrets].noteKey).toBe(lastNote.noteKey);
                expect(acousticGuitar.notesByRope[ropeIndex][acousticGuitar.nbrFrets].octave).toBe(lastNote.octave);
            });
        })
    });
});