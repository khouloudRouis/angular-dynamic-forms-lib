
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    SimpleChanges,
    inject
  } from '@angular/core';
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
  export class DynamicFormComponent implements OnInit, OnChanges, OnDestroy {
    @Input() fields: InputConfig[] = [];
    @Output() submitted = new EventEmitter<{ value: unknown; valid: boolean }>();
  
    private readonly fb = inject(FormBuilder);
  
    form: FormGroup = this.fb.group({});
  
    ngOnInit() {
      this.rebuildForm();
    }
  
    ngOnChanges(changes: SimpleChanges) {
      if (changes['fields'] && !changes['fields'].firstChange) {
        this.rebuildForm();
      }
    }
  
    submit() {
      this.form.markAllAsTouched();
      if (this.form.invalid) {
        return;
      }
      this.submitted.emit({ value: this.form.getRawValue(), valid: this.form.valid });
    }
  
    reset() {
      this.form.reset();
    }
  
    ngOnDestroy() {
      this.reset();
    }
  
    private rebuildForm() {
      this.form = this.fb.group({});
      this.buildForm(this.fields);
      this.form.markAsPristine();
      this.form.markAsUntouched();
    }
  
    private buildForm(fields: InputConfig[]) {
      fields.forEach(field => {
        const controlValidators = field.validators || [];
        this.form.addControl(
          field.name,
          this.fb.control(field.value ?? '', controlValidators)
        );
      });
    }
  }
  