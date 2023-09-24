// Reactライブラリをインポートします。これによりReactのコンポーネントやフックなどが使用可能になります。
import React from 'react';

// @testing-library/reactから必要な関数をインポートします。これによりReactコンポーネントのテストが可能になります。
import { render, screen, waitFor } from '@testing-library/react';

// msw/nodeからsetupServer関数をインポートします。これにより、APIリクエストのモックが可能になります。
import { setupServer } from 'msw/node';

// mswからrestオブジェクトをインポートします。これにより、RESTful APIリクエストのモックが可能になります。
import { rest } from 'msw';

// テスト対象のAppコンポーネントをインポートします。
import App from '../App';

// MSW（Mock Service Worker）のサーバーをセットアップします。
// これにより、外部APIとの通信をモックして、テスト中に実際のAPIリクエストが発生しないようにします。
const server = setupServer(
  // rest.getメソッドで、特定のAPIエンドポイントへのGETリクエストをモックします。
  // この例では、'http://localhost:3001/api/' へのGETリクエストがモックされます。
  rest.get('http://localhost:3001/api/', (req, res, ctx) => {
    // レスポンスとしてテキストメッセージを返します。これがAppコンポーネントに表示されます。
    return res(ctx.text('API is running....'));
  })
);

// すべてのテストが開始する前に一度だけ実行される関数です。
beforeAll(() => server.listen()); // MSWのサーバーを起動します。これにより、APIリクエストのモックが有効になります。

// 各テストが終了するたびに実行される関数です。
afterEach(() => server.resetHandlers()); // ハンドラーをリセットします。これにより、次のテストが正確に実行されます。

// すべてのテストが終了した後に一度だけ実行される関数です。
afterAll(() => server.close()); // MSWのサーバーを閉じます。これにより、APIリクエストのモックが無効になります。

// 実際のテストケースです。
test('renders API response', async () => {
  // Appコンポーネントをレンダリングします。これにより、仮想DOMにコンポーネントが追加されます。
  render(<App />);

  // screen.getByTextを使用して、特定のテキストが表示されるのを待ちます。
  // この例では、'API is running....' というテキストが表示されるのを待ちます。
  await waitFor(() => screen.getByText('API is running....'));

  // screen.debug()は、現在のスクリーンの状態をコンソールに出力します。デバッグ用に利用します。
  // screen.debug();

  // expect関数とtoBeInTheDocumentマッチャーを使用して、テキストがドキュメントに存在することを確認します。
  // これにより、APIのレスポンスが正しくAppコンポーネントに表示されていることを検証します。
  expect(screen.getByText('API is running....')).toBeInTheDocument();
});
