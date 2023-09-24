
# fullstack-js-app-template

このテンプレートは、フルスタックのJavaScriptアプリケーションを構築するためのものです。以下に、各セクションで使用する主要な技術スタックを紹介します。

## [Frontend](./notes/Frontend.md)
フロントエンドでは、以下の技術を利用しています。
- HTML: ウェブページの構造を定義します。
- CSS: スタイリングおよびレイアウトを適用します。
  - Tailwind: 効率的なスタイリングのためのユーティリティファーストなCSSフレームワークです。
- JavaScript: ウェブページの動的な機能を実装します。
  - React: UIを構築するためのJavaScriptライブラリです。
    - Zustand: 軽量でシンプルなステートマネージメントライブラリです。
    - Storybook: UIコンポーネントを視覚的に開発するためのツールです。
    - Jest + React Testing Library: ユニットテストとコンポーネントテストを行うためのライブラリです。
    - Mock Service Worker: サービスワーカーを利用してAPIモッキングを行うライブラリです。
- Vite: 高速な開発環境とバンドラーです。

## [Backend](./notes/Backend.md)
バックエンドでは、以下の技術を利用しています。
- JavaScript: サーバーサイドのロジックを実装します。
  - Express: ウェブアプリケーションフレームワークです。
    - Prisma: PostgresqlのためのORM（オブジェクト関係マッピング）ライブラリです。
      - Postgresql: 関係データベース管理システムです。
    - Jest + SuperTest: HTTPアサーションを行うためのライブラリです。

## [Env](./notes/Env.md)
開発環境およびデプロイメントには、以下のツールを利用しています。
- Docker-compose: 複数のコンテナを定義し、実行するためのツールです。
- Vagrant + VirtualBox: 仮想化された開発環境を構築・管理するためのツールです。
- Ansible: サーバーのプロビジョニングとコンフィギュレーション管理を自動化するツールです。
- Heroku: クラウドプラットフォームで、アプリケーションのデプロイメント、スケーリング、運用が可能です。

## [Support](./notes/Support.md)
- ChatGPT4: このプロジェクトのサポートには、ChatGPT4が利用可能です。

## [Training](./notes/Training.md)

## Commands
以下のコマンドで、バックエンドとフロントエンドの起動・テストが行えます。

### バックエンドの起動
```sh
node backend/server.js
````

### フロントエンドの起動

```sh
cd frontend
npm start
```

![2023-09-24_13h14_54](https://github.com/kurosawa-kuro/fullstack-js-app-template/assets/15902862/e3b83eb4-7110-4174-b9b5-2ce02e238439)


### バックエンドのテスト

```sh
cd backend
npm test
```
![2023-09-24_13h13_43](https://github.com/kurosawa-kuro/fullstack-js-app-template/assets/15902862/83a92e3e-7272-42cd-8e85-525bea3fdba9)



### フロントエンドのテスト

```sh
cd frontend
npm test
```
![2023-09-24_13h14_23](https://github.com/kurosawa-kuro/fullstack-js-app-template/assets/15902862/457e4441-ff2b-4b69-baa3-f44262d8f214)


