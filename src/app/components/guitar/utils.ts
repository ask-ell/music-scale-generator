import { DO_MAJOR_SCALE, DO_MINOR_SCALE, Scale } from "@_app/domain";

export function getScaleFromName(scaleName: string): Scale {
    switch (scaleName) {
        case DO_MAJOR_SCALE.name:
            return DO_MAJOR_SCALE;
        case DO_MINOR_SCALE.name:
            return DO_MINOR_SCALE;
        default:
            throw new Error(`Unknown scale : ${scaleName}`);
    }
}