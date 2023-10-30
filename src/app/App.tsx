import React, {Suspense} from 'react';
import './App.css';
import {AppRouter} from "./router/index";

function App() {

  return (
      <div className="app">
        <Suspense fallback="">
          <AppRouter/>
        </Suspense>
      </div>
  );
}

export default App;

