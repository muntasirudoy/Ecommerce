import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';   
import {StoreProvide} from './Store/Store'               
ReactDOM.render(<StoreProvide><App /></StoreProvide>,document.getElementById('root'));

reportWebVitals();
