# swagger-rm-example
<div style="text-align:right">Language: <i>English</i> | <a href="README_JA.md">日本語</a></div>

This library removes `example` from your swagger code.



# Purpose

The purpose of this library is to avoid errors that occure when importing a swagger file into Amazon API Gateway like below.

```
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
var fs = require('fs');
var swaggerRmExample = require('swagger-rm-example');

// read yaml file
var inputFile = "./swagger.yaml";
var inputStr = fs.readFileSync(inputFile, 'utf8');

// remove example from string
var outputStr = swaggerRmExample.removeExample(inputStr);

// display result
console.log(outputStr);
```

