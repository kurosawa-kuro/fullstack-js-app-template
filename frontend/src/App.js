// Reactとそのhooks（useEffect, useState）をインポートする
import React, { useEffect, useState } from 'react';
// コンポーネントのスタイリングのためのCSSファイルをインポートする
import './App.css';

// Appコンポーネントの定義
function App() {
  // apiResponseという名前のstate変数を定義し、初期値を空文字列に設定する
  const [apiResponse, setApiResponse] = useState('');

  // useEffect hookを使用して、コンポーネントがマウントされた後に行う処理を定義する
  useEffect(() => {
    // APIエンドポイントにリクエストを送る
    fetch("http://localhost:3001/api/")
      // レスポンスをテキストとして解析する
      .then(response => response.text())
      // 解析したレスポンステキストをstate変数apiResponseにセットする
      .then(response => setApiResponse(response))
      // エラーが発生した場合、コンソールにエラー情報をログする
      .catch(error => console.log(error));
  }, []); // 空の依存配列を渡して、このeffectがコンポーネントのマウント時にのみ実行されるようにする

  // コンポーネントのレンダリング内容を返す
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {apiResponse} {/* APIから取得したレスポンスを表示する */}
        </p>
      </header>
    </div>
  );
}

// Appコンポーネントをエクスポートする（他のファイルからインポート可能にする）
export default App;
