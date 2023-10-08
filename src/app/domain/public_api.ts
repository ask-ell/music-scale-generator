import Note from "./note";
import Guitar from "./guitar";
import Scale from "./scale";
import UnkownScaleNameError from "./errors/unknown-scale-name.error";
import { NoteKey, ScaleName } from "./types";
import { SCALES, getScaleFromName, parseScaleName } from "./scales";
import { ACOUSTIC_GUITAR } from "./instruments";

export {
    NoteKey,
    ScaleName,
    Guitar,
    Note,
    Scale,
    UnkownScaleNameError,
    SCALES,
    ACOUSTIC_GUITAR,
    getScaleFromName,
    parseScaleName
}