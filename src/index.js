import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Router } from 'react-router-dom';
import Layout from "./components/layout/index.js";
import history from './utils/history';
import RouterMap from './router/routerMap.js';
import Mobile from './pages/mobile';
import isMobilePlatform from './utils/isMobilePlatform';
import "./index.css";

function App() {
  if (isMobilePlatform) {
    return <Mobile />
  }
  else {
    return (
      <Router history={history}>
        <Layout>
          <RouterMap />
        </Layout>
      </Router>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
