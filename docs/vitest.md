# step 1 - isntall deps

$ npm i -D vitest
$ npm i -D @testing-library/react
$ npm i -D happy-dom


# step 2 - update config

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom'
  }
});
```
# step 3 - run command
```
$ npm t
```
