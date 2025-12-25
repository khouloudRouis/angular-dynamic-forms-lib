import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormComponent } from './dynamic-form.comonent';
import {FormGroup, Validators } from '@angular/forms';
import { InputConfig } from '../../models/input-config';

describe('DynamicFormComponent', () => {
  let component: DynamicFormComponent;
  let fixture: ComponentFixture<DynamicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicFormComponent],
       providers: []
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicFormComponent);

    component = fixture.componentInstance;
    component.fields = [
      { name: 'email', validators: [Validators.required, Validators.email] } as InputConfig
    ];

    fixture.detectChanges();
   
  });

  it('should create and apply validators', () => {
    expect(component).toBeTruthy();
    expect(component.form).toBeDefined();
    expect(component.form.contains('email')).toBeTrue();

    const emailCtrl = component.form.get('email')!;
    emailCtrl.setValue('');
    expect(emailCtrl.hasError('required')).toBeTrue();
    emailCtrl.setValue('not-an-email');
    expect(emailCtrl.hasError('email')).toBeTrue();
  });

   it('should reset', () => {
    const spyOnReset = spyOn(FormGroup.prototype, 'reset');
    component.ngOnDestroy();
    expect(spyOnReset).toHaveBeenCalled();
  });
});
