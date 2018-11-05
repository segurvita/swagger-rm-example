# swagger-rm-example
<div style="text-align:right">Language: <a href="README.md">English</a> | <i>日本語</i></div>

swaggerのコードからexampleを取り除くnpmライブラリを作りました。



# 目的

Amazon API GatewayにSwaggerファイルをインポートしたところ、以下のようなエラーが発生しました。

```
errors : [Invalid model schema specified. Unsupported keyword(s): ["example"]]
```

このエラーを回避することが目的です。



# 使用方法

本ライブラリの仕様にはNode.jsが必要です。

Node.jsがインストール済みであれば、以下のコマンドでインストールできます。

```bash
npm install swagger-rm-example
```

サンプルコードは以下の通りです。

```javascript
// ライブラリを追加
var fs = require('fs');
var swaggerRmExample = require('swagger-rm-example');

// YAMLファイルを読み込み
var inputFile = "./swagger.yaml";
var inputStr = fs.readFileSync(inputFile, 'utf8');

// 文字列からexampleを削除
var outputStr = swaggerRmExample.removeExample(inputStr);

// 結果を表示
console.log(outputStr);
```
