import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';

interface ValidationResult {
    [key: string]: boolean;
}

export class GlobalValidator{

    static incorrectMailFormat(control: FormControl ): ValidationResult {

        var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { "incorrectMailFormat": true };
        }

        return null;
    }

    static isValidPhoneNumber(control: FormControl ): ValidationResult {

        var REGEXP = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

        if (control.value != "" &&  !REGEXP.test(control.value)) {
            return { "validPhoneNumber": true };
        }

        return null;
    }

}


