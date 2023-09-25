# Backend

## Node.js(Javascript)

npm init -y

"type": "module" をパッケージのJSONファイルに追加することで、ESモジュールとしてNode.jsプロジェクトを扱うことができます。

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


## Jest

npm install --save-dev jest supertest @babel/core @babel/preset-env babel-jest jest supertest



```
# .babelrc
module.exports = {
    testEnvironment: 'node',
    transform: {
        '^.+\\.(c|m)?js$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'cjs', 'mjs'],
};
```

```
# jest.config.cjs

module.exports = {
    testEnvironment: 'node',
    transform: {
        '^.+\\.(c|m)?js$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'cjs', 'mjs'],
};

```


## Database PostgreSQL pg

npm init -y  # 初めての場合、プロジェクトを初期化
npm install pg

index.js

```js
const { Client } = require('pg');

// データベース接続情報
const config = {
  host: 'localhost',
  user: 'dev_user',
  password: 'dev_password',
  database: 'development_db'
};

// PostgreSQLクライアントを作成
const client = new Client(config);

// データベースに接続
client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err.stack))
  .finally(() => client.end()); // 接続終了
```

host: "localhost"
name: "dev_user"
password: "dev_password"
name: "development_db"

<!-- node.js接続確認 -->


CREATE TABLE Todo (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL
);

INSERT INTO Todo (title) VALUES ('Task 1');
INSERT INTO Todo (title) VALUES ('Task 2');
INSERT INTO Todo (title) VALUES ('Task 3');

SELECT * FROM Todo;


## Express

npm install express

// index.js
// Expressをインポート
const express = require('express');

// Expressアプリケーションを作成
const app = express();

// ポート番号の設定
const port = 3001;

// ルートルートに対するGETリクエストのハンドラーを設定
app.get('/', (req, res) => {
  // レスポンスとしてJSONを返す
  res.json({ message: 'Hello, World!' });
});

// サーバーを起動
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});