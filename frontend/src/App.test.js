import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import App from './App';

// MSWのサーバーをセットアップ
const server = setupServer(
  rest.get('http://localhost:3001/api/', (req, res, ctx) => {
    return res(ctx.text('API is running....'));
  })
);

beforeAll(() => server.listen()); // サーバーの開始
afterEach(() => server.resetHandlers()); // 各テスト後にハンドラーをリセット
afterAll(() => server.close()); // 全てのテストが完了した後にサーバーを閉じる

test('renders API response', async () => {
  render(<App />);

  await waitFor(() => screen.getByText('API is running....'));

  expect(screen.getByText('API is running....')).toBeInTheDocument();
});
