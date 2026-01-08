import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, Validators } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form.component';
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
      { type: 'email', name: 'email', validators: [Validators.required, Validators.email] } as InputConfig
    ];

    fixture.detectChanges();
   
  });

  it('should create controls and apply validators', () => {
    expect(component).toBeTruthy();
    expect(component.form).toBeDefined();
    expect(component.form.contains('email')).toBeTrue();

    const emailCtrl = component.form.get('email')!;
    emailCtrl.setValue('');
    expect(emailCtrl.hasError('required')).toBeTrue();
    emailCtrl.setValue('not-an-email');
    expect(emailCtrl.hasError('email')).toBeTrue();
  });

  it('should emit on submit when valid', () => {
    const emitSpy = spyOn(component.submitted, 'emit');
    const emailCtrl = component.form.get('email')!;
    emailCtrl.setValue('test@example.com');

    component.submit();

    expect(emitSpy).toHaveBeenCalledWith({
      value: { email: 'test@example.com' },
      valid: true
    });
  });

  it('should not emit when invalid', () => {
    const emitSpy = spyOn(component.submitted, 'emit');
    component.submit();
    expect(emitSpy).not.toHaveBeenCalled();
  });

  it('should reset via lifecycle', () => {
    const spyOnReset = spyOn(FormGroup.prototype, 'reset');
    component.ngOnDestroy();
    expect(spyOnReset).toHaveBeenCalled();
  });
});
