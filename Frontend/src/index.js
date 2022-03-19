import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';   
import {StoreProvide} from './Store/Store'  
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";             
ReactDOM.render(<StoreProvide><App /></StoreProvide>,document.getElementById('root'));

reportWebVitals();
