import Scale from "./scale";
import { NoteKeys } from "./types";

const { DO, RE, RE_DIESE, MI, FA, SOL, SOL_DIESE, LA, SI } = NoteKeys;

const DO_MAJOR_SCALE = new Scale("Do M", [DO, RE, MI, FA, SOL, LA, SI]);

const DO_MINOR_SCALE = new Scale("Do m", [DO, RE, RE_DIESE, FA, SOL, SOL_DIESE, SI]);

export const SCALES = [DO_MAJOR_SCALE, DO_MINOR_SCALE];