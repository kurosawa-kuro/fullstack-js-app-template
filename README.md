
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

## Commands
以下のコマンドで、バックエンドとフロントエンドの起動・テストが行えます。

### バックエンドの起動
```sh
cd backend
node backend/server.js
````

### フロントエンドの起動

```sh
cd frontend
npm start
```

### バックエンドのテスト

```sh
cd backend
npm test
```

### フロントエンドのテスト

```sh
cd frontend
npm test
```
