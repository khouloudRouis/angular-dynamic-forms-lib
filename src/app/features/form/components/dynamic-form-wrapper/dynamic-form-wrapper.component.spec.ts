import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormWrapperComponent } from './dynamic-form-wrapper.component';
import { FormGroup } from '@angular/forms';

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
});
