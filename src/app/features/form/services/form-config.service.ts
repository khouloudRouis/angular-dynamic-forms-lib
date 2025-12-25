import { Injectable, signal } from '@angular/core';
import { InputConfig } from '../models/input-config';
import { Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class FormConfigService {

    private readonly _fields = signal<InputConfig[]>([
        { type: 'text', name: 'fullname', label: 'Full Name', placeholder: 'Enter Full Name', validators: [Validators.required] },
        {
            type: 'email', name: 'email', label: 'Email', validators: [
                Validators.required,
                Validators.email
            ]
        },
        {
            type: 'select', name: 'gender', label: 'Gender',
            options: [{ 'key': 'Male', 'value': 'male' }, { 'key': 'Female', 'value': 'female' }], validators: [Validators.required]
        },
        { type: 'checkbox', name: 'agree', label: 'Agree to terms' },

    ]);
    readonly fields = this._fields.asReadonly();

}
