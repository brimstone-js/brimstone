# brimstone

A simple React translation library.

![GitHub package.json version](https://img.shields.io/github/package-json/v/brimstone-js/brimstone?label=Version)
[![Node.js CI](https://github.com/brimstone-js/brimstone/actions/workflows/node.js.yml/badge.svg)](https://github.com/brimstone-js/brimstone/actions/workflows/node.js.yml)
[![CodeQL](https://github.com/brimstone-js/brimstone/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/brimstone-js/brimstone/actions/workflows/codeql-analysis.yml)

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)




## Introduction

Brimstone is an easy-to-use translation library that uses React context to change text across your entire app when the language is changed.




## Development

### Requirements

* [Node.js](https://nodejs.org)

### NPM Scripts

Run `npm install` first to install package dependencies.

* `npm run lint` - Run the StandardJS linter to check for warnings and errors
* `npm run build` - Build the library to the _dist_ folder
* `npm test` - Run the Jest testing suite




## Usage

### Context

Place the TranslationContext at the root of your application

```tsx
import { Language, TranslationContext } from 'brimstone'
import { useState } from 'react'

function App() {
  const [language, setLanguage] = useState<Language>()

  return (
    <TranslationContext.Provider value={{
      language,
      setLanguage
    }}>
      ...
    </TranslationContext>
  )
}
```

Then use the Translate component anywhere to render the current language

```tsx
import { Translate } from 'brimstone'

function MyComponent() {
  return (
    <div>
      <h1>
        <Translate
          eng="Welcome to my app!"
          spa="¡Bienvenido a mi sito web!"
          deu="Willkommen in meiner Website!"
        />
      </h1>
    </div>
  )
}
```

### Styling

Import the CSS file in your application the apply the correct styling to all components.

```tsx
import '~brimstone/brimstone.css';
```

#### Colors

Components that use colors will import the LESS variables defined in [_colors.less](./_colors.less).

<svg width="12" height="12"><rect width="12" height="12" style="fill:#f0f0f0" /></svg>&emsp;`#f0f0f0`&emsp;light

<svg width="12" height="12"><rect width="12" height="12" style="fill:#353535" /></svg>&emsp;`#353535`&emsp;dark

<svg width="12" height="12"><rect width="12" height="12" style="fill:#aa55ff" /></svg>&emsp;`#aa55ff`&emsp;primary

<svg width="12" height="12"><rect width="12" height="12" style="fill:#0088ff" /></svg>&emsp;`#0088ff`&emsp;secondary

<svg width="12" height="12"><rect width="12" height="12" style="fill:#aaffff" /></svg>&emsp;`#aaffff`&emsp;info

<svg width="12" height="12"><rect width="12" height="12" style="fill:#0be06b" /></svg>&emsp;`#0be06b`&emsp;success

<svg width="12" height="12"><rect width="12" height="12" style="fill:#ffff03" /></svg>&emsp;`#ffff03`&emsp;warning

<svg width="12" height="12"><rect width="12" height="12" style="fill:#db3a35" /></svg>&emsp;`#db3a35`&emsp;error



## License

Distributed under the MIT License. See [LICENSE](https://github.com/brimstone-js/brimstone/tree/main/LICENSE) for more information.




## Contact

Matthew Downs

Email: [matthew.downsc@gmail.com](mailto:matthew.downsc@gmail.com)

Project Link: [https://github.com/brimstone-js/brimstone](https://github.com/brimstone-js/brimstone)
