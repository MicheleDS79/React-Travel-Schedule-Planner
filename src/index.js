import { createRoot } from 'react-dom/client';
import 'font-awesome/css/font-awesome.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


const rootElement =document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

