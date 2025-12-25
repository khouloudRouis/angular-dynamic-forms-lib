import { Component } from '@angular/core';
import { DynamicFormWrapperComponent } from './features/form/components/dynamic-form-wrapper/dynamic-form-wrapper.component';

@Component({
  selector: 'app-root',
  imports: [DynamicFormWrapperComponent],
  template: `<app-dynamic-form-wrapper/>`,
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dynamic-form-angular18';
}
