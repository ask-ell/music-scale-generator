import { MaybeUndefined } from "@_app/core";

import NotRegistredScaleError from "./errors/not-registred-scale.error";
import UnkownScaleNameError from "./errors/unknown-scale-name.error";
import Scale from "./scale";
import { NoteKey, ScaleName } from "./types";

const { DO, RE, RE_DIESE, MI, FA, SOL, SOL_DIESE, LA, SI } = NoteKey;

const DO_MAJOR_SCALE = new Scale(ScaleName.DO_M, [DO, RE, MI, FA, SOL, LA, SI]);

const DO_MINOR_SCALE = new Scale(ScaleName.DO_m, [DO, RE, RE_DIESE, FA, SOL, SOL_DIESE, SI]);

export const SCALES = new Array<Scale>(DO_MAJOR_SCALE, DO_MINOR_SCALE);

function isScaleName(scaleName: string): scaleName is ScaleName {
    return Object.values(ScaleName).some(_scaleName => _scaleName === scaleName);
}

export function parseScaleName(scaleName: string): ScaleName {
    if (!isScaleName(scaleName)) {
        throw new UnkownScaleNameError(scaleName);
    }
    return scaleName;
}

export function getScaleFromName(scaleName: ScaleName): Scale {
    const scale: MaybeUndefined<Scale> = SCALES.find(scale => scale.name === scaleName);
    if (!scale) {
        throw new NotRegistredScaleError(scaleName);
    }
    return scale;
}