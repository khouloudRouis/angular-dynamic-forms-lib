import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { DynamicFormWrapperComponent } from './dynamic-form-wrapper.component';

describe('DynamicFormWrapperComponent', () => {
  let component: DynamicFormWrapperComponent;
  let fixture: ComponentFixture<DynamicFormWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicFormWrapperComponent],
       providers: []
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicFormWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.fields).toBeDefined();
  });

  it('should reset', () => {
    const spyOnReset = spyOn(FormGroup.prototype, 'reset');
    component.onReset(new FormGroup({}));
    expect(spyOnReset).toHaveBeenCalled();
  });

  it('should delegate submit to child component', () => {
    const child = fixture.debugElement.query(By.directive(DynamicFormComponent)).componentInstance as DynamicFormComponent;
    const submitSpy = spyOn(child, 'submit');

    component.onSubmit();

    expect(submitSpy).toHaveBeenCalled();
  });
});
