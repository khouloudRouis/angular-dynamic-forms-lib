import { Component, Signal, ViewChild, inject } from '@angular/core';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { FormConfigService } from '../../services/form-config.service';
import {FormGroup } from '@angular/forms';
import { InputConfig } from '../../models/input-config';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-form-wrapper',
  standalone: true,
  imports: [CommonModule, DynamicFormComponent],
  templateUrl: './dynamic-form-wrapper.component.html',
 
})
export class DynamicFormWrapperComponent {
  private readonly formConfigService = inject(FormConfigService);
  fields : Signal<InputConfig[]>;
  @ViewChild(DynamicFormComponent) dynamicForm?: DynamicFormComponent;
  submitted?: { value: unknown; valid: boolean };

  constructor() {
   this.fields = this.formConfigService.fields;
  }
  
  onSubmit() {
    this.dynamicForm?.submit();
  }

  onSubmitted(result: { value: unknown; valid: boolean }) {
    this.submitted = result;
  }

  
  onReset(form: FormGroup) {
    form.reset();
    this.submitted = undefined;
  }
}
