```js script
import { html } from '@open-wc/demoing-storybook';
import '../backdrop-logo.js';

export default {
  title: 'BackdropLogo',
  component: 'backdrop-logo',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# BackdropLogo

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add backdrop-logo
```

```js
import 'backdrop-logo/backdrop-logo.js';
```

```js preview-story
export const Simple = () => html`
  <backdrop-logo></backdrop-logo>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <backdrop-logo title="Hello World"></backdrop-logo>
`;
```
