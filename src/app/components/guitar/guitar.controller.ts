import { FormControl, FormGroup } from "@angular/forms";

export class GuitarController extends FormGroup {
    constructor() {
        super({
            scaleName: new FormControl<string | null>(null)
        });
    }
}