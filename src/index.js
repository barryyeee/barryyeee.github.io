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
      <div className="App">
        <Router history={history}>
          <Layout>
            <RouterMap />
          </Layout>
        </Router>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
