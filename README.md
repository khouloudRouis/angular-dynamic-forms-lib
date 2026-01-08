# Forms Library Frontend

A reusable **Angular 18** library for building **dynamic and reactive forms** using signals. Designed for flexibility, maintainability, and modern Angular best practices.

---

## Features

- Dynamic form generation from **Config Service**
- Fully reactive using **Angular 18 signals**
- Supports nested controls, validations, and reusable components
- Clean **OnPush** change detection for performance
- ESLint integrated for code quality
- Unit testing setup included

---

## Tech Stack

- Angular 18
- TypeScript
- RxJS
- ESLint
- Jasmine / Karma (for testing)

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/khouloudRouis/angular-dynamic-forms-lib.git
cd dynamic-form-angular18
```

### Install & run

```bash
npm install
npm start   # dev server on http://localhost:4200
npm test    # unit tests
npm run lint
```

### Usage (provide your own config)

```ts
fields = signal<InputConfig[]>([
  { type: 'text', name: 'fullname', label: 'Full Name', validators: [Validators.required] },
  { type: 'email', name: 'email', label: 'Email', validators: [Validators.required, Validators.email] },
  {
    type: 'select',
    name: 'gender',
    label: 'Gender',
    options: [
      { key: 'Male', value: 'male' },
      { key: 'Female', value: 'female' }
    ],
    validators: [Validators.required]
  }
]);
```

Bind it to the wrapper component:

```html
<app-dynamic-form [fields]="fields()"></app-dynamic-form>
```

The wrapper listens for `submitted` and exposes reset/submit helpers for easy integration.

---

## Demo / Screenshot

> **Note:** Consider deploying to Vercel, Netlify, or GitHub Pages and add a live demo link here!

The form supports:
- ✅ Text, email, password inputs
- ✅ Select dropdowns
- ✅ Radio buttons
- ✅ Checkboxes
- ✅ Required and email validators
- ✅ Real-time validation feedback
- ✅ Dynamic form rebuilding on config changes

---

## Project Structure

```
src/app/features/form/
├── components/
│   ├── dynamic-form/          # Core form component
│   └── dynamic-form-wrapper/  # Wrapper with submit/reset
├── models/
│   └── input-config.ts        # Field configuration interface
└── services/
    └── form-config.service.ts # Signal-based config service
```

---

## License

MIT

