# swagger-rm-example [![Build Status](https://travis-ci.org/segurvita/swagger-rm-example.svg?branch=master)](https://travis-ci.org/segurvita/swagger-rm-example)
<div style="text-align:right">Language: <i>English</i> | <a href="README_JA.md">日本語</a></div>
This library removes `example` from your swagger code.



# Purpose

The purpose of this library is to avoid errors that occur when importing a swagger file into Amazon API Gateway like below.

```bash
errors : [Invalid model schema specified. Unsupported keyword(s): ["example"]]
```



# Usage

This library require npm. If npm has already been installed, you can install the library with the following command.

```
npm install swagger-rm-example
```

Please call the library as following.

```javascript
// import package
const fs = require('fs');
const swaggerRmExample = require('swagger-rm-example');

// read yaml file
const inputFile = "./swagger.yaml";
const inputStr = fs.readFileSync(inputFile, 'utf8');

// remove example from string
const outputStr = swaggerRmExample.removeExample(inputStr);

// display result
console.log(outputStr);
```



# Development

If you edit this project, you can clone it from the repository and build the development environment with the following command.

```bash
# Install required packages
npm install

# Run the test
npm test
```

