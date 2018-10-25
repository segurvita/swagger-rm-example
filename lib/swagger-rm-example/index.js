'use strict';

var yaml = require('js-yaml');

function removeExample(input) {
  // exampleを削除する再帰関数
  var removeExampleRecursion = (obj) => {
    Object.keys(obj).forEach(key => {
      if (obj[key]) {
        if (typeof obj[key] === 'object') {
          removeExampleRecursion(obj[key]);
        } else if (key == "example") {
          delete obj[key];
        }
      }
    });
  };

  // yamlを読み込み
  var doc = yaml.safeLoad(input);

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

  // yaml形式で返却
  return yaml.safeDump(doc);
}

module.exports.removeExample = removeExample;
