# swagger-rm-example [![Build Status](https://travis-ci.org/segurvita/swagger-rm-example.svg?branch=master)](https://travis-ci.org/segurvita/swagger-rm-example)
<div style="text-align:right">Language: <a href="README.md">English</a> | <i>日本語</i></div>
swaggerのコードからexampleを取り除くnpmライブラリを作りました。



# 目的

Amazon API GatewayにSwaggerファイルをインポートしたところ、以下のようなエラーが発生しました。

```bash
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
const fs = require('fs');
const swaggerRmExample = require('swagger-rm-example');

// YAMLファイルを読み込み
const inputFile = "./swagger.yaml";
const inputStr = fs.readFileSync(inputFile, 'utf8');

// 文字列からexampleを削除
const outputStr = swaggerRmExample.removeExample(inputStr);

// 結果を表示
console.log(outputStr);
```



# 開発環境構築

本プロジェクトを編集した場合、リポジトリから本プロジェクトをクローンし、以下のコマンドで開発環境を構築できます。

```bash
# 必要なパッケージの導入
npm install

# テスト実行
npm test
```

