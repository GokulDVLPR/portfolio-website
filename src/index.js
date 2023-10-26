import ReactDom from "react-dom/client"
import 'react-icons'
import './index.css'
import React from "react";
import App from './app'

const root = ReactDom.createRoot(document.querySelector('#root'));
root.render(<App/>);