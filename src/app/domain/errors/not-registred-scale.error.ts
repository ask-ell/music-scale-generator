import DomainError from "./domain.error";
import { ScaleName } from "../types";

export default class NotRegistredScaleError extends DomainError {
    constructor(scaleName: ScaleName) {
        super((`Not registred scale : ${scaleName}`));
    }
}