# React Stack Example [![Build Status](https://travis-ci.org/TondaHack/simplecalculation.svg?branch=master)](https://travis-ci.org/TondaHack/simplecalculation)

Example of stack for React.js written in ES6. Bundled by Webpack for develop with HotReload.

Tests are configured by Karma, Mocha, Sinon, Expect. Coverage is visualized by iSparta modul. 

Travis build to gh-page. [Live example](http://tondahack.github.io/simplecalculation/)

Tests coverage online. [Tests coverage](http://tondahack.github.io/simplecalculation/coverage/)

##Prerequisites
- Node.js

##Technologies
- [React](https://facebook.github.io/react/)
- [Redux](http://redux.js.org/)
- [Immutable.js](https://facebook.github.io/immutable-js/)
- [Webpack](https://webpack.github.io/)
- [Cssnext](http://cssnext.io/)
- [Karma](https://karma-runner.github.io/1.0/index.html)
- [Mocha](https://mochajs.org/)
- [PhantomJS](http://phantomjs.org/)
- [MaterialDesignLite](https://tleunen.github.io/react-mdl/)

## Install Project
`npm install`

## Build Project
`npm run build`

##Development

###Develop Project
 `npm start`

##Tests

##Single Run Tests
 `npm test`

###Develop Tests
 `npm run test:dev`
 
###Run With docker
 This project is dockerized with [Alpine image](https://hub.docker.com/_/alpine/) and thanks to docker volumes is Hot reload working. 
 In this approach you don't need node installed.

 `docker-compose up`



