# Brimstone

A simple React translation library.

![GitHub package.json version](https://img.shields.io/github/package-json/v/brimstone-js/brimstone?label=Version)
[![Node.js CI](https://github.com/brimstone-js/brimstone/actions/workflows/node.js.yml/badge.svg)](https://github.com/brimstone-js/brimstone/actions/workflows/node.js.yml)
[![CodeQL](https://github.com/brimstone-js/brimstone/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/brimstone-js/brimstone/actions/workflows/codeql-analysis.yml)

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)




## Introduction

Brimstone is an easy-to-use translation library that uses React context to change text across your entire app when the language is changed.




## Usage

Place the TranslationContext at the root of your application

```tsx
import { Language, TranslationContext } from '@brimstone/react'
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

Use the Translate component anywhere to render the current language

```tsx
import { Translate } from '@brimstone/react'

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

### Demo

View a live demo [here](https://brimstone-js.github.io/brimstone/)




## Development

### Requirements

* [Node.js](https://nodejs.org)

### NPM Scripts

Run `npm install` first to install package dependencies.

* `npm run lint` - Run the StandardJS linter to check for warnings and errors
* `npm run build` - Build the library to the _dist_ folder
* `npm test` - Run the Jest testing suite




## License

Distributed under the MIT License. See [LICENSE](https://github.com/brimstone-js/brimstone/tree/main/LICENSE) for more information.
