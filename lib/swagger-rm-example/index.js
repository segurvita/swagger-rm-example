'use strict';

const yaml = require('js-yaml');

function removeExample(input) {
  // validate input
  if (!input) {
    console.error("Error: input is empty.");
    return false;
  }

  // recursion function to remove example
  const removeExampleRecursion = (obj) => {
    Object.keys(obj).forEach(key => {
      if (obj[key]) {
        if (key == "example") {
          delete obj[key];
        } else if (typeof obj[key] === 'object') {
          removeExampleRecursion(obj[key]);
        }
      }
    });
  };

  // load yaml
  const doc = yaml.safeLoad(input);
  if (!doc) {
    console.error("Error: loading yaml is failed.");
    return false;
  }

  // remove example
  if (doc.definitions) {
    removeExampleRecursion(doc.definitions);
  }

  if (doc.parameters) {
    removeExampleRecursion(doc.parameters);
  }

  if (doc.responses) {
    removeExampleRecursion(doc.responses);
  }

  if (doc.paths) {
    removeExampleRecursion(doc.paths);
  }

  if (doc.components) {
    removeExampleRecursion(doc.components);
  }

  // return yaml
  return yaml.safeDump(doc);
}

module.exports.removeExample = removeExample;