# バックエンド開発ドキュメント

このドキュメントは、Node.js、Jest、PostgreSQL、およびExpressを使用したバックエンド開発の基本的なステップを説明します。

## Node.jsのセットアップ

1. **プロジェクトの初期化**

   ```sh
   npm init -y
   ```

2. **パッケージのJSONファイルの編集**

   以下のように`type`を`module`に設定して、ESモジュールとしてNode.jsプロジェクトを扱います。Reactに合わせています。

   ```json
   {
     "name": "nodejs",
     "version": "1.0.0",
     "description": "",
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

## Jestのセットアップ

JestはJavaScriptのテストフレームワークです。以下のコマンドでJestと関連パッケージをインストールします。

```sh
npm install --save-dev jest supertest @babel/core @babel/preset-env babel-jest
```

1. **Babelの設定**

   プロジェクトのルートディレクトリに`.babelrc`ファイルを作成し、以下の内容を記述します。

```js
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current"
        }
      }
    ]
  ]
}
   
```

2. **Jestの設定**

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

## PostgreSQLのセットアップ

1. **pgパッケージのインストール**

   ```sh
   npm install pg
   ```

2. **データベース接続の実装**

   `index.js`に以下のコードを記述し、PostgreSQLデータベースに接続します。

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

3. **データベースとテーブルの作成**

   PostgreSQLで以下のSQLクエリを実行し、データベースとテーブルを作成します。

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

## Expressのセットアップ

1. **Expressパッケージのインストール**

   ```sh
   npm install express
   ```

2. **基本的なExpressアプリケーションの作成**

   `index.js`に以下のコードを追記または修正して、基本的なExpressアプリケーションを作成します。

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

これで、Node.js、Jest、PostgreSQL、およびExpressを使用した基本的なバックエンド開発の環境が整いました。
