## Project structure approach

Shared module for common resources
```
project-name/
├── e2e/
│   ├── app.e2e-spec.ts
│   └── app.po.ts
├── node_modules/
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── services/
│   │   ├── models/
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── app-routing.module.ts
│   │   ├── login/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   ├── models/
│   │   │   ├── login.component.ts
│   │   │   ├── login.component.html
│   │   │   ├── login.component.scss
│   │   │   └── login-routing.module.ts
│   │   ├── core/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   ├── models/
│   │   │   ├── core.component.ts
│   │   │   ├── core.component.html
│   │   │   ├── core.component.scss
│   │   │   |── core-routing.module.ts
│   |   │   ├── feature1/
│   |   │   │   ├── components/
│   |   │   │   ├── services/
│   |   │   │   ├── models/
│   |   │   │   ├── feature1.component.ts
│   |   │   │   ├── feature1.component.html
│   |   │   │   ├── feature1.component.scss
│   |   │   │   └── feature1-routing.module.ts
│   |   │   └── feature2/
│   |   │       ├── components/
│   |   │       ├── services/
│   |   │       ├── models/
│   |   │       ├── feature2.component.ts
│   |   │       ├── feature2.component.html
│   |   │       ├── feature2.component.scss
│   |   │       └── feature2-routing.module.ts
│   │   └── shared/
│   │       ├── components/
│   │       ├── services/
│   │       ├── models/
│   │       └── shared.module.ts
│   ├── assets/
│   ├── environments/
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.scss
│   └── test.ts
├── angular.json
├── package.json
├── package-lock.json
└── tsconfig.json
```