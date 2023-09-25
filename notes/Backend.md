# バックエンド開発ドキュメント

このドキュメントでは、Node.js、Jest、PostgreSQL、およびExpressを使用したバックエンド開発の基本的な手順について説明します。

## 1. Node.jsのセットアップ

### 1.1 プロジェクトの初期化

```sh
npm init -y
```

### 1.2 パッケージJSONの設定

`type`を`module`に設定することで、プロジェクトをESモジュールとして扱います。これにより、Reactとの互換性も確保されます。

```json
{
  "name": "nodejs",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

## 2. Jestのセットアップ

JestはJavaScriptのテストフレームワークです。Jestと関連パッケージを以下のコマンドでインストールします。

```sh
npm install --save-dev jest supertest @babel/core @babel/preset-env babel-jest
```

### 2.1 Babelの設定

プロジェクトのルートディレクトリに`.babelrc`ファイルを作成し、以下の内容を記述します。

```json
{
  "presets": [
    ["@babel/preset-env", {
      "targets": {
        "node": "current"
      }
    }]
  ]
}
```

### 2.2 Jestの設定

プロジェクトのルートディレクトリに`jest.config.cjs`ファイルを作成し、以下の内容を記述します。

```js
module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.(c|m)?js$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'cjs', 'mjs'],
};
```

## 3. PostgreSQLのセットアップ

### 3.1 pgパッケージのインストール

```sh
npm install pg
```

### 3.2 データベース接続の実装

`index.js`に以下のコードを記述して、PostgreSQLデータベースに接続します。

```js
import { Client } from 'pg';

const config = {
  host: 'localhost',
  user: 'dev_user',
  password: 'dev_password',
  database: 'development_db'
};

const client = new Client(config);

client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err.stack))
  .finally(() => client.end());
```

### 3.3 データベースとテーブルの作成

以下のSQLクエリを実行し、データベースとテーブルを作成します。

```sql
CREATE TABLE Todo (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL
);

INSERT INTO Todo (title) VALUES ('Task 1');
INSERT INTO Todo (title) VALUES ('Task 2');
INSERT INTO Todo (title) VALUES ('Task 3');

SELECT * FROM Todo;
```

## 4. Expressのセットアップ

### 4.1 Expressパッケージのインストール

```sh
npm install express
```

### 4.2 基本的なExpressアプリケーションの作成

`index.js`を以下のように編集し、基本的なExpressアプリケーションを作成します。

```js
import express from 'express';

const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
```

これで、Node.js、Jest、PostgreSQL、およびExpressを使用した基本的なバックエンド開発環境のセットアップが完了しました。
