# バックエンド開発ドキュメント

このドキュメントでは、Node.js、Jest、PostgreSQL、およびExpressを使用したバックエンド開発の基本的な手順について説明します。

## 1. Node.jsのセットアップ

### 1.1 プロジェクトの初期化

プロジェクトディレクトリを作成し、以下のコマンドでNode.jsプロジェクトを初期化します。

```sh
npm init -y
````

### 1.2 パッケージJSONの設定

`package.json`ファイルにて、`type`を`module`に設定します。これにより、ES Modulesが利用可能になり、Reactとの互換性も確保されます。

```json
{
  "name": "nodejs-postgresql",
  "version": "1.0.0",
  "main": "src/index.js",
  "type": "module",
  "scripts": {
    "test": "jest",
    "start": "node src/server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.15.5",
    "@babel/preset-env": "^7.15.6",
    "babel-jest": "^27.2.3",
    "jest": "^27.2.3",
    "supertest": "^6.1.6"
  },
  "dependencies": {
    "express": "^4.17.1",
    "pg": "^8.7.1"
  }
}
```

## 2. Jestのセットアップ

### 2.1 Jestと関連パッケージのインストール

以下のコマンドでJestと、Babelを利用するための関連パッケージをインストールします。

```sh
npm install --save-dev jest supertest @babel/core @babel/preset-env babel-jest
```

### 2.2 Babelの設定

Babelを設定するために、プロジェクトのルートディレクトリに`.babelrc`ファイルを作成し、以下の内容を記述します。

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

### 2.3 Jestの設定

Jestの設定ファイル`jest.config.cjs`をプロジェクトのルートディレクトリに作成し、以下の内容を記述します。

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

Node.jsからPostgreSQLに接続するための`pg`パッケージをインストールします。

```sh
npm install pg
```

### 3.2 データベースとテーブルの作成

PostgreSQLにて、以下のSQLクエリを実行し、データベースとテーブルを作成します。

```sql
CREATE DATABASE development_db;

\c development_db;

CREATE TABLE Todo (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL
);

INSERT INTO Todo (title) VALUES ('Task 1');
INSERT INTO Todo (title) VALUES ('Task 2');
INSERT INTO Todo (title) VALUES ('Task 3');
```

### 3.3 データベース接続の実装

`src/index.js`に以下のコードを記述して、PostgreSQLデータベースに接続します。

```js
import express from 'express';
import { Client } from 'pg';

const app = express();

app.get('/', async (req, res) => {
    const config = {
        host: 'localhost',
        user: 'dev_user',
        password: 'dev_password',
        database: 'development_db'
    };

    const client = new Client(config);
    await client.connect();

    try {
        const result = await client.query('SELECT * FROM todo');
        res.json(result.rows);
    } finally {
        await client.end();
    }
});

export { app };
```

## 4. Expressのセットアップ

### 4.1 Expressパッケージのインストール

WebアプリケーションフレームワークであるExpressをインストールします。

```sh
npm install express
```

### 4.2 サーバー起動のコードを切り出し

テストのしやすさを考慮し、サーバーの起動処理を`src/server.js`に切り出します。

```js
// nodejs-postgresql/src/server.js

import { app } from "./index.js";

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
```

## 5. テストの実行

最後に、以下のコマンドでJestを実行し、テストが正しく通ることを確認します。

```sh
npx jest
```

これで、Node.js、Jest、PostgreSQL、およびExpressを使用した基本的なバックエンド開発環境のセットアップが完了しました。

```

これにより、バックエンド開発の基本的なフローと各ステップでの作業内容が明確になり、読み手にとって理解しやすくなるでしょう。
```
