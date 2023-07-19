# Code Quality Manifesto

### Generic
Imports should be segregated into 4 groups:
* `modules` for modules import;
* `components` for components import;
* `resources` for hook, types, utils, constants, etc.
* `styles` for styling imports;

Components should be exported with explicit name.
> Example:
```js
// Prefer
export { ComponentName }

// Over the
export default ComponentName
```

Prefer aliased imports
> Example:
```js
// Prefer
import { Example } from '../../kit-cv-next/src/components/Example';

// Over the
import { Example } from '../../../Example';
```

### Variable naming convention
* Boolean variables should be named with `is` prefix. Example: `isChecked`.
* Interfaces should be named with `I` prefix. Example: `ISample`.
* Types should be named with `T` prefix. Example: `TSample`.
* Enums (and their members) should be named in the `UPPER_CASE` style. Example: `SAMPLE_ENUM`.

### File naming convention
* constants - *.constants.ts
* components - *.tsx
* hooks - *.hooks.ts
* styles - *.styles.ts
* stories - *.stories.tsx
* tests - *.tests.ts
* utils - *.utils.ts

### Branch naming convention
All branch names must comply with the following pattern: `%branch_type%/%ticket_id%-%ticket-title%`
> Example: feature/BLP-101-initial-commit

Branch types:
* feature
* release
* fix
* refactor

# Testing
Every interactive component should have a test ID assigned.  
Non-interactive component test ID assignment is optional.
Test ID's should be stored in dedicated `*.tests.ts` files. 
Test ID's should be created via `createTestId` utility tool.
