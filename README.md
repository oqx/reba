# Reba CLI 
---
A Lerna companion CLI for generating pattern library components.

## Component Tech
---

#  Reba CLI
A Lerna companion CLI for generating pattern library components.

  

##  What is Reba?
Configuration is big, harry, and scary. That's why I created Reba -- to remove that step entirely from the component creation process for pattern libraries. Or at the very least, to handle the bulk of it. 

Reba generates components that are ready to be shipped to an `npm registry` out-of-the-box.

Each Reba generated component ships with an .npmignore and builds with a type declarations file, so component consumers will get a node module with only a `dist` upon install, and inherit the types you define by default without any configuration on their end.

## Installation
Until this is published, it can be used by cloning the reba repo, then...
```
cd reba

npm run build

npm link
```

This will symlink the binary globally, exposing the `reba` command in your local environment.

## Usage
```
-v, --version  Show version number                                   [boolean]
  --name, -n     First argument-- name of component.
                    [string] [required] [default: "HamburgerNetwork"]
  --prefix, -p   Prefixed name of monorepo (i.e. @babel)
                    [string] [default: "@generic"]
  --default, -d  Determines whether component has a default export or named
                 export.
                    [boolean] [default: true]
  -h, --help     Show help                                             [boolean]
```

## Component Tech
### Webpack
Components are provided a `webpack.config.js`. This handles running a development server so you can test your component while developing, and the tree-shaken production build.

#### Webpack NAQ
> Does each component bundle React + ReactDOM?

No. Webpack configures React and ReactDOM as externals, so they will not be included in component bundles.

> Can I use Sass for styling? And are styles scoped?

Yes. `sass-loader` is used, and styles are encapsulated with [React scoped CSS](https://github.com/gaoxiaoliangz/react-scoped-css), which is the best ever.

---
### Typescript
Yes.

---

### Jest + react-test-renderer
Reba generates a default `spec` file to get you started, as well as a `jest.config.js`, and initials `__mocks__` directory to avoid exceptions where Jest tries to parse anything other than javascript/typescript files.

### Babel
Reba comes with a light ES6 Babel configuration, which includes typescript, env, and react presets, and the following plugins:
```
"babel-plugin-react-scoped-css",
"@babel/proposal-class-properties",
"@babel/proposal-object-rest-spread",
"@babel/proposal-optional-chaining"
```
If you run into issues with Typescript validation throwing an error when using optional chaining, be sure VSCode is using Typescript 3.7.2 or greater. To set the version VSCode is using, press `cmd + p` to open the search prompt, then press `>` and enter `typescript`. An typeahead option should appear allowing you to select the latest version (if you have it installed).
