import { Component, inject, Signal } from '@angular/core';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.comonent';
import { FormConfigService } from '../../services/form-config.service';
import {FormGroup } from '@angular/forms';
import { InputConfig } from '../../models/input-config';

@Component({
  selector: 'app-dynamic-form-wrapper',
  standalone: true,
  imports: [DynamicFormComponent],
  templateUrl: './dynamic-form-wrapper.component.html',
 
})
export class DynamicFormWrapperComponent {
  private readonly formConfigService = inject(FormConfigService);
  fields : Signal<InputConfig[]>;

  constructor() {
   this.fields = this.formConfigService.fields;
  }
  
  onSubmit() { /* empty */ }

  
  onReset(form: FormGroup) {
    form.reset();
  }
}
