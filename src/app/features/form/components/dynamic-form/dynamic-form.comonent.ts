import { ChangeDetectionStrategy, Component, inject, Input, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputConfig } from '../../models/input-config';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule, TitleCasePipe],
  templateUrl: './dynamic-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
  
})

export class DynamicFormComponent implements OnInit, OnDestroy {
  @Input() fields:  InputConfig[] = [];
  private readonly fb = inject(FormBuilder);

  form: FormGroup = this.fb.group({});


  ngOnInit() {
      this.form.reset();
      this.buildForm(this.fields);
      
  }

  private buildForm(fields: InputConfig[]) {
    fields.forEach(field => {
      const controlValidators = field.validators || [];
      this.form.addControl(field.name, this.fb.control(field.value || '', controlValidators));
    });
  }

  ngOnDestroy() {
    this.form.reset();
  }
}
