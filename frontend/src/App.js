import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [apiResponse, setApiResponse] = useState('');

  useEffect(() => {
    // APIエンドポイントにリクエストを送る
    fetch("http://localhost:3001/api/")
      .then(response => response.text())
      .then(response => setApiResponse(response))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {apiResponse}
        </p>
      </header>
    </div>
  );
}

export default App;
