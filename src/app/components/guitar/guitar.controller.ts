import { FormControl, FormGroup } from "@angular/forms";

import { MaybeNull } from "@_app/core";

export class GuitarController extends FormGroup {
    constructor() {
        super({
            scaleName: new FormControl<MaybeNull<string>>(null)
        });
    }
}