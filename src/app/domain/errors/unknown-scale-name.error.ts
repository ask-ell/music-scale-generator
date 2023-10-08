import DomainError from "./domain.error";

export default class UnkownScaleNameError extends DomainError {
    constructor(scaleName: string) {
        super(`Unknown scale name : ${scaleName}`);
    }
}