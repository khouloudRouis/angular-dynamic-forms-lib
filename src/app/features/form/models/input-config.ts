import { ValidatorFn } from "@angular/forms";

export interface InputConfig {
  type: 'text' | 'email' | 'password' | 'select' | 'checkbox'|'radio';
  name: string;
  label: string;
  placeholder?: string;
  value?: string;
  options?: Option[];
  validators?: ValidatorFn[]; 
}

interface Option {
  key?: string;
  value: string;
}
