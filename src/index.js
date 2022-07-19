import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import './index.css';
import 'antd/dist/antd.min.css'
import Root from './root';
import { Context } from './context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <Context>
     <Root/>
     </Context>
    </BrowserRouter>
  </React.StrictMode>
);

