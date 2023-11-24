import React, { StrictMode } from 'react';
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Router from './routes'

const container = document.getElementById('root');
const root = createRoot(container);

const Root = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </StrictMode>
  )
}

root.render(<Root />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
