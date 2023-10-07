import { SCALES, Scale } from "@_app/domain";

export function getScaleFromName(scaleName: string): Scale {
    const scale = SCALES.find(scale => scale.name === scaleName);
    if (!scale) {
        throw new Error(`Unknown scale : ${scaleName}`);
    }
    return scale;
}