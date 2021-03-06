# Web Component Test Demo [![Build Status](https://travis-ci.org/dakotaJang/web-component-test-demo.svg?branch=master)](https://travis-ci.org/dakotaJang/web-component-test-demo)

Chrome [![Build Status](https://travis-ci.org/dakotaJang/web-component-test-demo.svg?branch=test-chrome)](https://travis-ci.org/dakotaJang/web-component-test-demo) - Firefox [![Build Status](https://travis-ci.org/dakotaJang/web-component-test-demo.svg?branch=test-firefox)](https://travis-ci.org/dakotaJang/web-component-test-demo) - TSLint [![Build Status](https://travis-ci.org/dakotaJang/web-component-test-demo.svg?branch=test-tslint)](https://travis-ci.org/dakotaJang/web-component-test-demo)

I have built a simple app using web components to demonstrate testing web components in a continuous integration environment. Continuous integration becomes very useful when there are more developers making frequent changes to the code.

This is a demo project to demonstrate some basic setup for using Travis CI and Polymer's Web Component Test (WCT).
The web components are built using typescript which is compiled and packed using Webpack.

The test will return the result for:
- running the test in multiple browsers using the test written in ```/test/*.spec.js``` files.
- run tslint for checking the lints in typescript files.
