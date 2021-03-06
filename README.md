React boilerplate generator
===========================

This generators helps you setup a React project.
It includes as much basic features as possible (routing, i18n, flux, tests, compilation), and a small amount of code to demonstrate how to use them together.

This repo is open-sourced mainly as an inspiration on how to set up a React project, as well as for internal use at [V-Technologies](https://github.com/v-technologies).
Feel free to suggest any improvement, but we do not assure you that they will be integrated, as this boilerplate should continue to fit our own requirements.

Usage
-----

```
npm install -g yo
npm install -g generator-react-boilerplate-vtech

cd /path/to/your/project
yo react-boilerplate-vtech
```

Modules
-------

### JS

* [react](https://github.com/facebook/react), of course
* [react-intl](https://github.com/yahoo/react-intl) for i18n
* [react-router](https://github.com/reactjs/react-router) for routing
* [react-helmet](https://github.com/nfl/react-helmet) to handle HTML `<head>`
* [react-redux](https://github.com/facebook/react) to bind redux state to components
* [redux](https://github.com/reactjs/redux) for a functional flux implementation
* [redux-saga](https://github.com/yelouafi/redux-saga) to handle asynchronous flux actions
* [render-if](https://github.com/ajwhite/render-if) to handle conditional rendering
* [lodash](https://github.com/lodash/lodash) for great functional helpers
* [classnames](https://github.com/JedWatson/classnames) to generate dynamic class names for components
* [history](https://github.com/reactjs/history) to handle browser histories
* [fetch](https://github.com/github/fetch) to emulate the upcoming fetch function
* [karma](https://github.com/karma-runner/karma) to test everything in various browsers
* [mocha](https://github.com/mochajs/mocha) to power test suites
* [chai](https://github.com/chaijs/chai) as the assertion library (favoring the expect interface)
* [enzyme](https://github.com/airbnb/enzyme) to test components
* [webpack](https://github.com/webpack/webpack) to build everything
* [babel](https://github.com/babel/babel) to transpile ES6 code
* [eslint](https://github.com/eslint/eslint) to ensure code quality and consistency
* [eslint-config-vtech](https://github.com/v-technologies/eslint-config-vtech) to enforce our own standards

### CSS

* [susy](https://github.com/oddbird/susy) to build grids
* [typi](https://github.com/zellwk/typi) to handle responsive typography and vertical rythm
* [node-sass](https://github.com/sass/node-sass) to compile Sass
* [sass-lint](https://github.com/sasstools/sass-lint) to lint Sass

Architecture
------------

```
├── /css               (styles)
├── /dist              (compilation output)
├── /src               (scripts)
│   ├── /actions       (redux actions)
│   ├── /api           (api calls)
│   ├── /components    (components and redux containers)
│   ├── /messages      (i18n messages)
│   ├── /reducers      (redux reducers)
│   ├── /sagas         (redux sagas)
│   ├── /types         (prop types)
│   ├── index.js       (entry point)
│   ├── routes.js      (routes)
│   └── store.js       (redux store)
└── /test              (files following the same structure as src)
```
