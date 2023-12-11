import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Display from './Display';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Layout from './Layout';
import RouterDomApp from './RouterDomApp';
import { Provider } from "react-redux";
import store from './redux/store';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <Layout comp={Display}  /> */}
    <RouterDomApp />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
